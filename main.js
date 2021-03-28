// Global Variable

// Create a variable and Ask the user for Input (Case Insensitive)
const inputPerson = () => {
    let valuePerson = window.prompt('What is your choice (paper, rock or scissor)');
    // if (valuePerson != "paper"||valuePerson !="scissor"||"rock"){
    //     console.log("Only rock, paper and scissor allowed")
    //     return "Only rock, paper and scissor allowed";
    // };
    valuePerson.toLowerCase();
    console.log(valuePerson);
    return valuePerson;
}
// Generate inputs for the computer
const inputComputer = () => {
    let valueComputer = "";
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
const playRound = (person, computer, score) => {
    switch (person) {
        case "paper":
            if (computer === "rock"){
                score += 1;
                console.log(1)
                return ["Paper beats Rock, You won!", score];
            }else if (computer === "scissor"){
                score -= 1;
                console.log(2)
                return ["Scissor beats Paper, You lose!", score];
            }else{
                console.log(3)
                return ["It's a tie!", score];
            }
            break;
        case "rock":
            if (computer === "scissor"){
                score += 1;
                console.log(4)
                return ["Rock beats Scissor, You won!", score];
            }else if (computer === "paper"){
                score -= 1;
                console.log(5)
                return ["Paper beats Rock, You lose!", score];
            }else{
                console.log(6)
                return ["It's a tie!", score];
            }
            break;
            case "scissor":
                if (computer === "paper"){
                    score += 1;
                    console.log(7)
                    return ["Scissor beats Paper, You won!", score];
                }else if (computer === "rock"){
                    score -= 1;
                    console.log(8)
                    return ["Rock beats Scissor, You lose!", score];
                }else{
                    console.log(9)
                    return ["It's a tie!", score];
                }
                break;
        default:
            break;
    };
};
// Put all function in main function now
const game = () => {
    let score = 0;
    for (let i = 0; i < 5; i++){
        let person = inputPerson();
        let computer = inputComputer();
        let outputArray = playRound(person, computer, score);
        score = outputArray[1];
        console.log(`Game count: ${i+1}`)
        console.log(`Your score: ${score}`);
    };

}

game();

