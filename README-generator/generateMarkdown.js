// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License: ${license}](https://img.shields.io/badge/license-${license}-brightgreen.svg)`
  }
  return ""
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `## License
    This project is licensed under ${license}.`
  }
}
// TODO: Create a function that returns the license section of README

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}\n
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseLink(data.license)}
## Contribution
${data.contributing}
## Tests
${data.tests}
## Questions
If you would like to connect with the developer about ${data.title}, please email them at ${data.email} or their gitHub at @${data.github}.
`;
}

module.exports = generateMarkdown;