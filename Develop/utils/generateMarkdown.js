// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  To run tests, run the following command:
  \`\`\`md
  ${data.installation}
  \`\`\`
 
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  To run tests, run the following command:
  \`\`\`md
  ${data.tests}
  \`\`\`
  
  ## License
  Licensed Under :  ![GitHub license](https://img.shields.io/badge/license-MIT-red.svg)

  ## Questions
  If you have any questions about this project, contact me at ${data.email}. My Github profile page is [${data.username}](https://github.com/${data.username}).

`
;
}

module.exports = generateMarkdown;
