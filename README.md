# Inkstone
Text Editor - PWA (Progressive Web Application)

# Employee Tracker

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description
Employee Tracker is a command-line application for managing a company’s employee database using Node.js, Inquirer, and PostgreSQL. It allows users to view, add, and update employees, roles, and departments, and track the relationships between them, including managers.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
* [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To run this application locally:

1.	Clone the repository:
```
git clone https://github.com/wilsacker/Week-12-Challenge.git
```

2. Navigate to the project directory:
```
cd Week-12-Challenge
```

3. Install the dependencies:
```
npm install
```

4.	Install PostgreSQL if you haven’t already: [PostgreSQL Installation Guide](https://www.postgresql.org/download/)

5.	Set up the database:
•	Ensure your PostgreSQL server is running.
•	Run the schema to create the database:
```
psql -U postgres -d postgres -f db/schema.sql
```

•	Seed the database:
```
psql -U postgres -d employee_tracker -f db/seed.sql
```

6. Set up environment variables:
•	Create a .env file using the .env.example file in the root directory.
•	Add in the missing variables to configure your database.

## Usage
1.	Run the application using the following command:
```
node index.js
```

2.	You will be prompted with several options to:
•	View all employees, roles, or departments.
•	Add new employees, roles, or departments.
•	Update an employee’s role.
•	View employees by manager or department.
•	Remove employees, roles, or departments.

[Walkthrough Video](https://drive.google.com/file/d/1dMHIO_uBVVycaI1JfX9E-tCu8FtZurcZ/view?usp=sharing)

## Features

•	View Employees: Display a list of all employees with their details (role, department, salary, manager).
•	Add Employees: Add new employees, specifying their role and manager.
•	Update Employee Role: Modify the role of an existing employee.
•	View Roles & Departments: Display all available roles and departments.
•	Add Roles & Departments: Create new roles and departments.
•	Remove Records: Remove employees, roles, and departments.

## Technologies

•	Node.js: Backend framework used to build the application.
•	Inquirer.js: For handling user prompts in the command-line interface.
•	PostgreSQL: Database for storing company employee data.
•	pg-pool: PostgreSQL client for Node.js to manage database connections.

## License

This project is licensed under the MIT license.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests to improve the functionality or fix bugs.

## Tests

This project doesn’t include any test suites, but you can manually test it by interacting with the application or by setting up jest.

## Questions

If you have any questions, feel free to reach out:
- GitHub: [wilsacker](https://github.com/wilsacker)
- Email: williamsuttona@gmail.com

## Sources

This project was completed with the help of the following resources:

- [ChatGPT](https://chat.openai.com) - Used for guidance and assistance in building and troubleshooting parts of the application.
- [Node.js Documentation](https://nodejs.org/en/docs/) - For understanding the setup and use of Node.js.
- [MDN Web Docs](https://developer.mozilla.org/) - For information on JavaScript functions and web development.