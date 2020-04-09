var prompt = require("prompt");
var inquirer = require('inquirer');
var question = {
    type: "input",
    name: "input",
    message: "Email?",
    validate: function (value) {
        if (value != null) {
            return true;
        }
    }
}
function main(){
    inquirer.prompt(question)

    .then(answers => {
        var output = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.input);
        console.log(output);
        return output;
    });

}
