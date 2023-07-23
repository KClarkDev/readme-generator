// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    "Apache License 2.0":
      "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)]",
    "MIT License":
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    "BSD License":
      "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]",
    "GNU GPLv3 License":
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    "No License": "",
  };

  const badge = badges[license];

  return license !== "No License" ? badge : "";
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    "Apache License 2.0": "(https://opensource.org/licenses/Apache-2.0)",
    "MIT License": "(https://opensource.org/licenses/MIT)",
    "BSD License": "(https://opensource.org/licenses/BSD-2-Clause)", //2-Clause BSD license
    "GNU GPLv3 License": "(https://www.gnu.org/licenses/gpl-3.0)",
    "No License": "",
  };

  return links[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== "No License"
    ? `
  This application is covered under the ${license}

  Click the badge for more information: 
  
  ${renderLicenseBadge(license)}${renderLicenseLink(license)}`
    : "";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}  ${renderLicenseBadge(
    data.license
  )}${renderLicenseLink(data.license)}

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

  ${renderLicenseSection(data.license)}

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
