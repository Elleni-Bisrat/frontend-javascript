# Task 0: Creating an Interface for a Student

## Description
This task demonstrates the use of **TypeScript interfaces** to define a `Student` type and the rendering of a table in the browser using **Vanilla JavaScript**. The goal is to model student data and dynamically display it on a webpage.

## Features
- Defined a `Student` interface with the following properties:
  - `firstName: string`
  - `lastName: string`
  - `age: number`
  - `location: string`
- Created two student objects implementing the `Student` interface.
- Combined the students into an array `studentsList`.
- Dynamically rendered a table displaying:
  - The first name of each student
  - The location of each student

## Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
Navigate to the task_0 directory:

bash
Copy code
cd 0x04-TypeScript/task_0
Install dependencies:

bash
Copy code
npm install
Build the project using Webpack:

bash
Copy code
npm run build
Open the generated index.html (or served file) in a browser to see the table.

Requirements
TypeScript for type checking.

Webpack for bundling the project.

All variables use TypeScript typings.

Vanilla JavaScript is used to manipulate the DOM.

Example Output
First Name	Location
Elleni	Addis Ababa
John	Canada