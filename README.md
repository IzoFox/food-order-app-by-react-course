# Japanese Kitchen 🍣

Japanese Kitchen is a learning project I built while studying React.

The project was created step by step as I progressed through a React course. Its main purpose was to practice React concepts in a real application and better understand how components, state, props, context, and hooks work together.

## About the Project

Japanese Kitchen is a simple restaurant page that includes a description of the restaurant and a list of available dishes.

Users can:

- Browse the available dishes and their prices
- Select the desired quantity of a dish
- Add dishes to the shopping cart
- View all selected dishes in the cart
- Increase or decrease the quantity of individual items
- See the total price of the order
- See the total number of items in the cart
- See a cart button animation when a new item is added

The list of dishes is currently hardcoded, as the main goal of the project was to practice frontend development with React rather than working with a backend or API.

## Live Demo on GitHub Pages

You can try the application directly in your browser:
[Watch the demo on GitHub Pages](https://izofox.github.io/food-order-app-by-react-course/)

## Demo Video

![Japanese Kitchen Demo](./assets/japanese-kitchen-demo.gif)

You can also watch the full project demo on YouTube:

[▶ Watch the demo on YouTube](https://youtube.com/shorts/JeHqS64uMcI)

## What I Practiced

While building this project, I improved my understanding of several React concepts:

1. **Component-based architecture**
   Breaking an application into smaller reusable components and understanding the responsibilities of each component.

2. **useState**
   Managing simple local component state.

3. **useReducer**
   Managing more complex state transitions, especially when multiple related state changes are easier to keep together in one place.

4. **useEffect**
   Running side effects and synchronizing a component with changes outside the rendering process.

5. **Effect cleanup**
   Cleaning up timers and other effects to prevent multiple timers or subscriptions from accumulating.

6. **useRef**
   Keeping references to DOM elements and accessing input values without causing additional renders.

7. **Context API**
   Sharing data between multiple components without passing it through every intermediate component.

8. **Props**
   Passing data and callbacks between directly related components.

9. **Understanding application data flow**
   I improved my ability to navigate a component-based project, understand component relationships, and trace how an action in one component eventually affects other parts of the application.

10. **CI/CD and GitHub Pages**
    Practiced creating a simple CI/CD pipeline with GitHub Actions. The application is automatically built and deployed to GitHub Pages after changes are pushed to the `main` branch.

## Git & GitHub Practice

While working on Japanese Kitchen, I also practiced and reinforced my knowledge of Git and GitHub.

This is one of the first learning projects I decided to publish publicly on GitHub.

Instead of uploading only the finished project, I committed my progress incrementally while going through the course. Most lessons were completed as separate commits, with a few additional commits for fixes and corrections.

This means that the commit history also represents the development process of the application.

## Learning Process

While studying React and building this application, I created many personal text notes explaining different React concepts and recorded several video notes for myself.

I find working with React quite interesting. Even though we are already living in the age of AI-assisted development, I believe it is still important while learning to write code yourself and understand what is actually happening inside the application.

Calling React a "low level" of programming would probably be a bit funny, but the idea is the same: I want to understand the fundamentals instead of only being able to ask AI to generate the result. :)

## Running the Project Locally

To run the project on your computer, you will need [Node.js](https://nodejs.org/) and npm installed.

Clone the repository:

```bash
git clone https://github.com/IzoFox/food-order-app-by-react-course.git
```

Navigate to the project directory:

```bash
cd food-order-app-by-react-course
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application should then be available at:

```text
http://localhost:3000
```

## Technologies

- React
- JavaScript
- HTML
- CSS / CSS Modules
- Git
- GitHub

## Project Status

The project is complete as a learning exercise.

Its primary purpose is to document my React learning progress and demonstrate the concepts I practiced while building it.
