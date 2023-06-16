const { writeFile } = require("fs");

const genMD = data => {
  let output = `
  
# ${data.title}
${ data.license == 'None' ? '' : `![${data.license}](https://img.shields.io/badge/License-${data.license}-blue)`}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributors}

## License
${data.license}

## Tests
${data.tests}
 
## Questions
If there are any questions or concerns, we can be reached at [Email](mailto:${data.email}) or at [Github](https://github.com/${data.github})
`;

  writeFile("./dist/README.md", output, (err) => {
    if (err) throw err;
    console.log('A README.md file was created in the "dist" folder!');
  });
};

module.exports = genMD;
