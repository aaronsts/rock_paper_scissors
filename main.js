// Create a variable and Ask the user for Input (Case Insensitive)
const inputPerson = () => {
    let valuePerson = window.prompt('What is your choice (paper, rock or scissor)');
    valuePerson.toLowerCase();
    console.log(valuePerson);
    return valuePerson;
}
// Generate inputs for the computer
const inputComputer = () => {
    
}
// Calculate input for computer
// Compare both inputs to eachother
// Decide who won (rock beats scissor, scissor beats paper and paper beats rock)