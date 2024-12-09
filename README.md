
# Better Software Engineering (React) Internship 

## Description
This application contains two forms - Sign Up and Login - using Formik for form handling and validation, built with TypeScript. It also implements a "Remember Me" checkbox for Login, password strength indicator for Sign Up, and a clean, accessible design.

## How to Run the Project
1. Clone the repository `git Clone https://github.com/KartikAKGEC89/Better_Assignment.git`.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Visit `http://localhost:5173` to view the application.

# Design Choices
## 1. Form Handling and Validation
- Formik is used for handling form state and submission.
- Yup is employed to perform synchronous form validation, ensuring that all inputs meet the specified rules.
- Forms include proper error handling and field validation messages to ensure users are guided through the correct input process.
## 2. Password Strength Indicator
For the Sign Up form, a password strength indicator is implemented to provide visual feedback about the strength of the entered password. The password strength is determined based on two factors:

- Length of the password (at least 6 characters for weak, 10 characters for medium, and stronger than that for strong).
Complexity of the password, where the form checks if the password includes a combination of lowercase, uppercase, numeric, and special characters.
- The indicator visually displays Weak, Medium, or Strong strength depending on the complexity.

## 3. "Remember Me" Functionality
- The Login form includes a "Remember Me" checkbox. If the user selects this option, the email is saved to the localStorage, enabling the user to stay logged in on subsequent visits to the application.

## 4. UX Enhancements
- Form inputs are clearly labeled, and error messages are presented next to the relevant fields, making it easier for users to correct mistakes.
- The application has a consistent visual style, and elements are well-spaced to prevent a cluttered appearance.
- The Sign Up form provides immediate feedback on password strength, helping the user understand what makes a strong password.

# Assumptions and Limitations
## Assumptions
This is a basic frontend-only application with no backend. All form data is processed on the client-side.
Password strength is evaluated using basic rules (length and character variety), which may not be as comprehensive as more advanced password strength algorithms.
## Limitations
- No backend integration: The forms do not communicate with a backend service. This means no real authentication or data storage is implemented.
- Password Strength Evaluation: The password strength indicator evaluates strength based on length and character complexity but does not check for things like dictionary words or common passwords.
- No session management: While the "Remember Me" functionality stores the email in localStorage, no actual session management or secure storage (e.g., cookies) is implemented.

