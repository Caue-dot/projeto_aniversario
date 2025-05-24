
//Modulos

    import express from 'express'
    import {create} from 'express-handlebars'
    const app = express()

//Configs

    //Handlebars
        const hbs = create({defaultLayout: 'main', extname: '.handlebars'})
        app.engine('handlebars', hbs.engine)
        app.set('view engine', 'handlebars')

    //Express
    
        app.use(express.static('public'))
//Rotas
    app.get("/", (req,res) =>{
        res.render("index")
    })


//Outros

const PORT = 8080
app.listen(PORT, () =>{
    console.log('Conectado no ip localhost:8080')
})