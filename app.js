
//Modulos

import express from 'express'
import { create } from 'express-handlebars'
import { VerifyQuestion, questions, IncreaseQuestionNumber } from './quiz.js'
import { PickAnswer } from './wise_turtle.js'
import handlebars_helpers from './handlebars_helpers.js'
import cookies from 'cookies'
const app = express()

const keys = ['your-secret-key1', 'your-secret-key2'];


//Variáveis
var question_id;
var question_button;
var is_correct;


var answer;
//Configs

//Handlebars
const hbs = create({ defaultLayout: 'main', extname: '.handlebars' })
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//Express

app.use(express.static('public'))
app.use(cookies.express(keys))

//Ngrok

//Rotas

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/tartaruga", (req, res) => {
    if(req.query.resposta){
        let answer = PickAnswer();
        res.render("tartaruga", { answer: answer })
    }else{
        res.render("tartaruga")
    }
})






app.get("/quiz", (req, res) => {

    var currQuestionCookie = req.cookies.get("currQuestion")
    //Checa se ja existe o cookie e cria um caso não exista
    if (currQuestionCookie == null) {
        res.cookies.set("currQuestion", "0");
        currQuestionCookie = 0
    }

    const question = questions[currQuestionCookie]
    res.render("quiz/quiz", { question: question })
})



app.post("/verifyquestion", (req, res) => {

    question_id = req.query.id
    question_button = req.query.button


    is_correct = VerifyQuestion(question_id, question_button);
    if (is_correct) {
        //Se a resposta esta correta então passa para a proxima pergunta 
        var currQuestionCookie = req.cookies.get("currQuestion")
        var currQuestionCookie = IncreaseQuestionNumber(Number(currQuestionCookie))

        if (currQuestionCookie == "Finished") {
            //Se terminou  vai para a pagina de finalização
            res.render("quiz/win")
            return;
        }

        res.cookies.set("currQuestion", currQuestionCookie);
        res.render("quiz/correct")
    } else {
        //Se a resposta está errada então volta pra primeira pergunta
        res.cookies.set("currQuestion", 0);
        res.render("quiz/wrong")
    }

})

app.get("/resetquiz", (req, res) => {
    res.cookies.set("currQuestion", "0")
    res.redirect("/quiz")

})


//Outros

const PORT = 8080
app.listen(PORT, () => {
    console.log('Conectado no ip localhost:8080')
})
