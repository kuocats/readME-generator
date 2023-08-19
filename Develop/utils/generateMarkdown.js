// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    default:
      return ``;
  }
}

// license link for license section, creates link to license type selected by user
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return `[${license}](https://opensource.org/licenses/MIT)`;
    default:
      return ``;
  }
}

// create license section link in table of contents, only created if license type is provided by user
function renderLicenseTOC(license) {
  if (!license) {
    return '';
  } else {
    return `
 * [License](#license)
`
  }
}

// create license section, only adds license title/section if license type is provided by user
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `
 ## License
${renderLicenseLink(license)}
`
  }
}

// generate README.md, template literal for markdown file
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
    ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Please contact me for additional questions:
  
  [https://github.com/${data.username}](https://github.com/${data.username})

  ${data.email}
`;
}

module.exports = generateMarkdown;