

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
        text: "Quem e sua melhor amiga?",

        alternatives: {
            a: "Eu",
            b: "Eu",
            c: "Eu",
            d: "Ana",
        },

        correct: "d"


    },
    {
        id: 2,
        text: "De quem você mais gosta?",

        alternatives: {
            a: "Eu",
            b: "Eu",
            c: "Eu",
            d: "Ana",
            e: "Ana2"
        },

        correct: "d"


    },
    {
        id: 2,
        text: "De quem você mais gosta?",

        alternatives: {
            a: "Eu",
            b: "Eu",
            c: "Eu",
            d: "Ana",
            e: "Ana2"
        },

        correct: "d"


    },
    {
        id: 2,
        text: "De quem você mais gosta?",

        alternatives: {
            a: "Eu",
            b: "Eu",
            c: "Eu",
            d: "Ana",
            e: "Ana2"
        },

        correct: "d"


    },
    {
        id: 2,
        text: "De quem você mais gosta?",

        alternatives: {
            a: "Eu",
            b: "Eu",
            c: "Eu",
            d: "Ana",
            e: "Ana2"
        },

        correct: "d"


    },
    {
        id: 2,
        text: "De quem você mais gosta?",

        alternatives: {
            a: "Eu",
            b: "Eu",
            c: "Eu",
            d: "Ana",
            e: "Ana2"
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
