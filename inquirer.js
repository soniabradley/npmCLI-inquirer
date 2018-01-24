'use strict';
var inquirer = require('inquirer');

var questions = [{
        type: 'input',
        name: 'name?',
        message: "What's your first name"
    },
    {
        type: 'list',
        name: 'Just Saying',
        message: 'Why are you here?',
        choices: [
            'You brought me here',
            'I am waiting on Uber',
            'I live here'
        ]
    },
    {
        type: 'checkbox',
        name: 'What is going on?',
        message: 'Just say it',
        choices: [
            'I dont feel good',
            'I wont say',
            'Everything is cool'
        ]
    },
    {
        type: 'confirm',
        name: 'Should I stay',
        message: 'Should I go'
    },
    {
        type: 'password',
        name: 'myPassword',
        message: 'What is the password'
    }
];
inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
});