import inquirer from "inquirer";
import fs from "fs";

const questions = [
  {
    type: "input",
    name: "title",
    message: "Title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Description of your project.",
  },
  //   {
  //     type: "input",
  //     name: "installation",
  //     message: "Installation Instructions.",
  //   },
  //   {
  //     type: "input",
  //     name: "usage",
  //     message: "Usage.",
  //   },
  //   {
  //     type: "input",
  //     name: "credits",
  //     message: "Credits.",
  //   },
  //   {
  //     type: "input",
  //     name: "features",
  //     message: "Features.",
  //   },
  //   {
  //     type: "input",
  //     name: "contribution",
  //     message: "How to Contribute.",
  //   },
  //   {
  //     type: "input",
  //     name: "test",
  //     message: "Please provide test instructions.",
  //   },
  //   {
  //     type: "list",
  //     name: "license",
  //     message: "Select a license.",
  //     choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  //   },
  //   {
  //     type: "input",
  //     name: "github",
  //     message: "What is your GitHub username?",
  //   },
  //   {
  //     type: "input",
  //     name: "email",
  //     message: "What is your email?",
  //   },
];
inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    let answerString = JSON.stringify(answers);
    generateReadMe(answerString);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error(error);
    } else {
      console.error(error);
      // Something else went wrong
    }
  });

function generateReadMe(content) {
  fs.writeFile("output/README.md", content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been written");
  });
}
