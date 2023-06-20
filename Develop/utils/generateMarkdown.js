// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; // i think this is problem #1
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, name) {
  const year = new Date().getFullYear();
  return(license === "Unlicense") ?

  Anyone is free to copy, modify, publish, use, compile, sell, or
  distribute this software, either in source code form or as a compiled
  binary, for any purpose, commercial or non-commercial, and by any
  means.
  '
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${data.title}
  
  ## Description

  ${data.description}
  
  ## Table of contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Tests](#tests)
  4. [Contribution](#contribution)
  5. [License](#license)
  6. [Questions](#questions)
  
  # Installation
  
  ${data.installation}
  
  # Usage
  
  ${data.usage}
  
  # Tests
  
  ${data.tests}
  
  # Contribution
  
  ${data.contribution}

  # Questions
  
}

// TODO: Create a function to generate markdown for README
return `# ${data.title}

${renderLicenseBadge(license)} //possible problem #2?
'
}

module.exports = generateMarkdown;
