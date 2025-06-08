
const answers = ["Sim", "Não", "Talvez...", "Sei la", "COM CERTEZA NÃO","COM CERTEZA SIM", "Que??", "Nem te conto", 
"Sou incapaz e responder pergunta de tamanha complexidade", "Se quiser sim", "Talvez não", "Talvez sim", "Depende"];


function GetRndInteger(max){
    return Math.floor(Math.random() * max);
}

export function PickAnswer(){
    return answers[GetRndInteger(answers.length)];
}

