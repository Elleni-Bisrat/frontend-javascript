📘 README.md

📚 Student Table Renderer – TypeScript Project

This project renders a dynamic HTML table using TypeScript and vanilla JavaScript. It demonstrates basic TypeScript interfaces, DOM manipulation, and frontend bundling with Webpack.

📁 Project Structure
frontend-javascript/
└── 0x04-TypeScript/
    └── task_0/
        ├── js/
        │   └── main.ts          # TypeScript source code
        ├── dist/
        │   └── main.js          # Webpack output (generated)
        ├── index.html           # HTML file to load the script
        ├── package.json         # Project metadata and scripts
        ├── .eslintrc.js         # ESLint configuration
        ├── tsconfig.json        # TypeScript compiler settings
        └── webpack.config.js    # Webpack bundling configuration

🧠 Features

Defines a Student interface with:

firstName (string)

lastName (string)

age (number)

location (string)

Creates two student objects and stores them in an array called studentsList.

Dynamically renders a table showing each student’s first name and location.

Uses TypeScript for type safety and Webpack for bundling.

ESLint integration ensures clean, error-free code.

🚀 Setup Instructions

Navigate to the project directory:

cd frontend-javascript/0x04-TypeScript/task_0


Install dependencies:

npm install


Build the project:

npm run build


This compiles main.ts into dist/main.js.

Run the project:

Open index.html in your browser, or

Use a local server:

npm start


This launches a local dev server and opens the page automatically.

✅ Requirements

Webpack must compile with no type errors.

All variables and structures must use TypeScript.

Table must render correctly in the browser.

Code must follow ESLint rules.

🛠️ Technologies Used

TypeScript

Webpack

ESLint

Vanilla JavaScript (DOM API)

📌 Notes

The table is styled using inline CSS for simplicity.

You can expand the interface or table to include more fields like age or last name.

This project is ideal for learning TypeScript fundamentals and frontend tooling.
