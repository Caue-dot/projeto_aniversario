

export const questions = [
    {
        id: 0,
        text: "Quem foi a primeira pessoa que teve a casa visitada por todo mundo ao mesmo tempo?",

        alternatives: {
            a: "Bia",
            b: "Gaby",
            c: "Nathan",
            d: "Ana",
        },

        correct: "a"


    },
    {
        id: 1,
        text: "Quantos cachorros a Bia tem?",

        alternatives: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },

        correct: "b"


    },
    {
        id: 2,
        text: "Qual é a paixão alimentar da Bia?",

        alternatives: {
            a: "Picolé",
            b: "Amendoim",
            c: "Pipoca",
            d: "Pizza",
        },

        correct: "b"


    },
    {
        id: 3,
        text: "Em qual dessas situações a Bia e Gaby quase choraram de rir",

        alternatives: {
            a: "Fazendo um vídeo pro Youtube",
            b: "No parquinho",
            c: "No exame de vista",
            d: "Na apresentação da escola",
        },

        correct: "c"


    },
    {
        id: 4,
        text: "Como começou a amizade entre a Bia e a Gaby",

        alternatives: {
            a: "Na fila da cantina",
            b: "No grupo da igreja",
            c: "Na aula de educação física",
            d: "Jogando Pou no meio da aula",
        },

        correct: "d"


    },
    {
        id: 5,
        text: "Quanto é (-80538738812075974)³ + 80435758145817515³ + 12602123297335631³?",

        alternatives: {
            a: "-451",
            b: "62325",
            c: "42",
            d: "81",
    
        },

        correct: "c"


    },
    {
        id: 6,
        text: "Qual dessas características mais define a Bia?",

        alternatives: {
            a: "Engraçada",
            b: "Inspiradora",
            c: "Criativa",
            d: "Todas as anteriores",

        },

        correct: "d"


    },
    

]


export function VerifyQuestion(question_id, question_button) {
    if (question_button == questions[question_id].correct) {
        console.log("Acertou! id: "+ question_id + " alternativa: "+question_button)
        return true;
    } else {
        console.log("Errou! id: "+ question_id + " alternativa: "+question_button)
        return false;
    }
}

export function IncreaseQuestionNumber(currQuestion){
    if(currQuestion >= (questions.length-1)) return "Finished";

    console.log("Current Question: " + currQuestion++)
    return currQuestion++
    
}
