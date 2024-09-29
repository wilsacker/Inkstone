# Inkstone

Text Editor - PWA (Progressive Web Application)

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

A Progressive Web Application (PWA) that serves as a simple text editor. This application allows users to create, edit, and save text files with offline capabilities. It also supports installation on your device for a native-like experience.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
* [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Features

- Create and edit text documents
- Save files to local storage
- Offline functionality using service workers
- Installable as a PWA for a native app experience

## Technologies Used

- Javascript
- HTML
- CSS
- Webpack
- Workbox (for service workers)
- IndexedDB (for local storage)
- Babel (for JavaScript transpilation)

## Tests

The application includes automated tests to ensure functionality and reliability. To run the tests:

1.	Make sure all dependencies are installed:
```
npm install
```

2. Run the test suite using Jest
```
npm test
```

3. Check the test results in the terminal to ensure all test pass.

## Installation

1.	Clone the repository:
```
git clone https://github.com/wilsacker/Inkstone.git
```

2. Navigate to the project directory:
```
cd Inkstone
```

3. Install the dependencies:
```
npm install
```

## Usage

1.	Run the application in development mode:
```
npm run dev
```

2.	Open your browser and navigate to http://localhost:8080 to use the text editor.

## Offline Functionality

The application can function offline by using service workers. To test this:

1.	Open Developer Tools in your browser.
2.	Go to the “Network” tab and check the “Offline” option.
3.	Refresh the page and access the offline page.

## License

This project is licensed under the MIT License

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests to improve the functionality or fix bugs.

## Questions

If you have any questions, feel free to reach out:
- GitHub: [wilsacker](https://github.com/wilsacker)
- Email: williamsuttona@gmail.com

## Sources

This project was completed with the help of the following resources:

- [ChatGPT](https://chat.openai.com) - Used for guidance and assistance in building and troubleshooting parts of the application.
- [Node.js Documentation](https://nodejs.org/en/docs/) - For understanding the setup and use of Node.js.
- [MDN Web Docs](https://developer.mozilla.org/) - For information on JavaScript functions and web development.