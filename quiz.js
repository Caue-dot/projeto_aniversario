

export const questions = [
    {
        id: 0,
        text: "Qual e a capital do Brasil?",

        alternatives: {
            a: "Alemanha",
            b: "Amapa",
            c: "Brasilia",
            d: "DF",
        },

        correct: "c"


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
