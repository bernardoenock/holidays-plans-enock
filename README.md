# Holiday Plan Management by Enock

## About

### Holiday Plan Management Project

The Holiday Plan Management project is an application designed to assist in organizing and managing holiday plans. It was developed with the aim of providing a user-friendly interface to perform create, read, update, and delete (CRUD) operations on holiday plans, along with additional features to enhance user experience.

#### Implemented Features:

- Holiday Plan Management Interface: An intuitive interface was designed and implemented, allowing users to create, view, update, and delete holiday plans.

- Holiday Plan Display: All holiday plans are displayed with their titles, descriptions, dates, locations, and participants (when available).

- PDF Generation Integration: Based on the created holiday plans, it is possible to generate a PDF or print the plan details.

- Form Validation: Client-side validation was implemented for input fields, ensuring that required fields are filled and that the date format is correct.

- Responsive Design: The interface was developed to be responsive, ensuring it works well on various devices and screen sizes.

- API Development (Bonus): An API was created to save holiday plan information.

- Additional Guidelines:
  - Best practices in front-end development, including code organization and readability, were followed.
  - Errors are handled gracefully, providing meaningful error messages to users.
  - Git is used for version control, with the code repository shared upon project completion.
  - Clear instructions are provided on how to set up and run the front-end application locally.
- Evaluation Criteria:
  - UI/UX Design and Usability: Evaluation of interface design quality and ease of use.
  - Form Validation and Error Handling: Assessment of client-side form validation effectiveness and error handling.
  - Testing Approach and Coverage: Evaluation of testing approach and coverage for front-end components and functionalities.
  Responsive Design and Cross-Browser Compatibility: Assessment of interface responsiveness and compatibility with different browsers.
  - Code Quality: Analysis of code quality, organization, and readability.

The project was developed using modern technologies such as React, Next.js, and MUI (Material-UI), ensuring a pleasant user experience and a solid foundation for efficient holiday plan management.

## Getting Started

First, instal requeriments:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Before, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Libraries

The libraries used in the project are listed in the package.json file. Here they are:

- `@emotion/react`: Library for styling React components using CSS-in-JS.
- `@emotion/styled`: An extension of the `@emotion/react` library that allows styling React components with CSS-in-JS syntax.
- `@mui/icons-material`: Material Design icons for use with Material-UI.
- `@mui/material`: A library of React components following Material Design guidelines.
- `@mui/x-date-pickers`: Date picker components for Material-UI.
- `axios`: A library for making HTTP requests in the browser and Node.js.
- `dayjs`: A library for date manipulation in JavaScript, offering an API similar to Moment.js but with a smaller size.
- `jspdf`: A JavaScript library for generating PDF documents in the browser.
- `next`: A React framework for building web applications.
- `react`: The core library for building user interfaces in React.
- `react-dom`: Provides specific methods for interacting with the React element tree.
- `zustand`: A library for global state management in React applications, offering a simple alternative to Redux.

These libraries were used to develop different aspects of the project, from creating user interfaces to handling dates, styling components, and managing state.

## TODOs

- [x] Holiday Plan Management Interface: Design and implement a user-friendly interface to perform CRUD operations on holiday plans.

- [x] Holiday Plan Display: Display all holiday plans with their titles, descriptions, dates, locations, and participants (if available).

- [x] PDF Generation Integration: Based on the holiday plan created, generate a PDF/print mode.

- [x] Form Validation: Implement client-side validation for input fields, ensuring that required fields are filled and the date format is correct.

- [x] Responsive Design: Ensure the interface is responsive and works well on various devices and screen sizes.

- [x] API Development (Bonus): You can create an API to save the information.
  - [x] http://localhost:3000/api/holidays

- [x] Additional Guidelines: 
  - [x] ● Use modern front-end frameworks like React, Next, jQuery, or vanilla JavaScript for development.
  - [x] ● Follow best practices in front-end development, including code organization and readability.
  - [x] ● Handle errors gracefully and provide meaningful error messages to users.
  - [x] ● Use Git for version control and share your code repository with us upon completion.
  - [x] ● Provide clear instructions on how to set up and run the front-end application locally.

- [x] Evaluation Criteria:
  - [x] ● UI/UX design and usability of the interface.
  - [x] ● Client-side form validation and error handling.
  - [x] ● Responsive design and cross-browser compatibility.
  - [x] ● Code quality, organization, and readability.

