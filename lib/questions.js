const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What installations are require for your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is the application being used?',
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Who contributed to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What tests are required?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project have?',
    choices: ['MIT','BSD','Apache','None']
  },
];

module.exports = questions;