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
  {
    type: "input",
    name: "installation",
    message: "Installation Instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage.",
  },
  {
    type: "input",
    name: "credits",
    message: "Credits.",
  },
  {
    type: "input",
    name: "features",
    message: "Features.",
  },
  {
    type: "input",
    name: "contribution",
    message: "How to Contribute.",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions.",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license.",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}

function generateReadMe(answers) {
  let badge = renderLicenseBadge(answers.license);
  return `# ${answers.title}

${badge}

## Description

${answers.description}

## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage
${answers.usage}


## Credits
${answers.credits}


## Features

${answers.features}

## How to Contribute

${answers.contribution}

## Tests

${answers.test}

## License

${answers.license}

## Questions

If you have any questions, please reach out to me at ${answers.email} or visit my GitHub profile at ${answers.github}.


`;
}

inquirer
  .prompt(questions)
  .then((answers) => {
    const readmeContent = generateReadMe(answers);

    fs.writeFile("output/README.md", readmeContent, (err) => {
      if (err) {
        console.error("Error writing README file", err);
      } else {
        console.log("README.md has been generated successfully!");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something went wrong", error);
    }
  });
