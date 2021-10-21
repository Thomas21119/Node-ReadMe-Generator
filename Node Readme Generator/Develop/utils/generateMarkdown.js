// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == null) {
    console.log('null')
    return 'null';
  } else if (license == 'Apache License 2.0') {
    let license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    return license;
  } else if (license == 'GNU General Public License v3.0') {
    let license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    return license;
  } else if (license == 'MIT License') {
    let license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    return license;
  } else if (license == 'BSD 2-Clause "Simplified" License') {
    let license = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    return license;
  } else if (license == 'BSD 3-Clause "New" or "Revised" License') {
    let license = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    return license;
  } else if (license ==  'Boost Software License 1.0') {
    let license = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    return license;
  } else if (license == 'Creative Commons Zero v1.0 Universal') {
    let license = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    return license;
  } else if (license == 'Eclipse Public License 2.0') {
    let license = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)' 
    return license;
  } else if (license == 'GNU General Public License v2.0') {
    let license = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    return license;
  } else if (license == 'GNU Lesser General Public License v2.1') {
    let license = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    return license;
  } else if (license == 'Mozilla Public License 2.0') {
    let license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    return license;
  } else if (license == 'The Unlicense') {
    let license = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    return license;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.title}                      ${renderLicenseSection(data.license)}
## Table of Contents:
[Description|](#description)
[Installation|](#installation)
[Usage|](#usage)
[License|](#license)
[Contributing|](#contributing)
[Tests|](#tests)
[Questions|](#questions)


<a name="description"> </a>

## Description

${data.description}
<a name="installation"> </a>

## Installation

${data.installationInstructions}
<a name="usage"> </a>

## Usage

${data.usageInformation}
<a name="license"> </a>

## License
This work is covered under the ${data.license} so use under the given rules. You may press the button on top op the page to view the license information 

<a name="contributing"> </a>

## Contributing

${data.contributionGuidelines}
<a name="tests"> </a>

## Tests

${data.testInstructions}
<a name="questions"> </a>

## Questions

reach me at: https://github.com/${data.githubUser} or email me at ${data.emailAddress}`;

}

module.exports = generateMarkdown;

