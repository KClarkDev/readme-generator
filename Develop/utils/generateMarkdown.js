// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const colors = {
    "Apache License 2.0": "F5C26B", // yellow
    "MIT License": "F07857", // blue
    "BSD License": "BF2C34", //red
    "GNU GPLv3 License": "4FB06D", //green
  };

  // ![Static Badge](https://img.shields.io/badge/:badgeContent)

  const badge =
    `https://img.shields.io/badge/${license}-${colors[license]}`.replace(
      / /g,
      "_"
    );
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle} ![Static Badge](${renderLicenseBadge(
    data.license
  )})

  ## Description

  ${data.projectDescription}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions?](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This application is covered under the ${data.license}

  ## How to Contribute

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions?

  Github profile: https://github.com/${data.github}

  Please email ${
    data.email
  } if you have any questions about the contents of this repository

`;
}

module.exports = generateMarkdown;

/* 

POTENTIAL TO ADD AFTER MVP: 

- Ability to add "Other" license based on user input text

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## Features

If your project has a lot of features, list them here.
*/
