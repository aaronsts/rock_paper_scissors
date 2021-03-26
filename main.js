// Create a variable and Ask the user for Input (Case Insensitive)
const inputPerson = () => {
    let valuePerson = window.prompt('What is your choice (paper, rock or scissor)');
    if (valuePerson != "paper"||"scissor"||"rock"){
        console.log("Only rock, paper and scissor allowed")
        return "Only rock, paper and scissor allowed";
    };
    valuePerson.toLowerCase();
    console.log(valuePerson);
    return valuePerson;
}
// Generate inputs for the computer
const inputComputer = () => {
    let valueComputer = "n/a";
    let randomSelector = Math.random();
    if (randomSelector <= 0.33){
        valueComputer = "rock";
    } else if (randomSelector > 0.33 && randomSelector <= 0.66){
        valueComputer = "scissor";
    } else {
        valueComputer = "paper";
    }
    console.log(valueComputer);
    return valueComputer;
}
// Compare both inputs to eachother & Decide who won (rock beats scissor, scissor beats paper and paper beats rock)
const compareValues = (person, computer) => {
    let score = 0;
    switch (person) {
        case "paper":
            if (computer === "rock"){
                score += 1;
                console.log(1)
                return ["Paper beats Rock, You won!", score];
            }else if (computer === "scissor"){
                console.log(2)
                return "Scissor beats Paper, You lose!";
            }else{
                console.log(3)
                return "It's a tie!";
            }
            break;
        case "rock":
            if (computer === "scissor"){
                score += 1;
                console.log(4)
                return ["Rock beats Scissor, You won!",score];
            }else if (computer === "paper"){
                console.log(5)
                return "Paper beats Rock, You lose!";
            }else{
                console.log(6)
                return "It's a tie!";
            }
            break;
            case "scissor":
                if (computer === "paper"){
                    score += 1;
                    console.log(7)
                    return ["Scissor beats Paper, You won!", score];
                }else if (computer === "rock"){
                    console.log(8)
                    return "Rock beats Scissor, You lose!";
                }else{
                    console.log(9)
                    return "It's a tie!";
                }
                break;
        default:
            break;
    };
};
// Put all function in main function now
const rockPaperScissor = () => {
    let yourScore = 0;
    for (let i = 0; i < 5; i++){
        let person = inputPerson();
        let computer = inputComputer();
        let outputScore = compareValues(person, computer);
    };

}

rockPaperScissor();

