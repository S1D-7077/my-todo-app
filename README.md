To-Do List Web App

A lightweight, frontend-only To-Do List web application built using plain HTML, CSS, and JavaScript.  
This project demonstrates a clear understanding of **frontend fundamentals, browser storage, and real-world deployment** using GitHub Pages.

The application is intentionally simple, reliable, and permanently accessible without any backend dependencies.

---

## Live Application

🔗 https://s1d-7077.github.io/my-todo-app/

---

## What This Project Demonstrates

- Ability to build a complete frontend application from scratch
- Proper separation of structure (HTML), behavior (JavaScript), and styling (CSS)
- Practical use of browser `localStorage` for state persistence
- Understanding of static hosting and deployment
- Debugging and fixing real deployment issues (file paths, script loading, hosting constraints)
- Shipping a working, accessible product instead of just writing code

---

## Features

- Add tasks instantly
- Delete individual tasks
- Tasks persist after page refresh
- No backend or server required
- Fast load time and zero external dependencies
- Works reliably on GitHub Pages

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser localStorage
- GitHub Pages for deployment

---

## Project Structure

my-todo-app/
├── index.html
├── script.js
└── README.md


---

## How Data Persistence Works

- Tasks are stored in the browser using `localStorage`
- Data persists across page refreshes
- Data is specific to the device and browser used

This design choice keeps the application simple, fast, and deployable as a static site.

---

## Design Decisions

- Frontend-only architecture to ensure permanent hosting with zero cost
- No frameworks to demonstrate strong core JavaScript understanding
- Minimal UI focused on functionality and clarity
- Explicit handling of empty states for better user experience

---

## Limitations (By Design)

- Tasks do not sync across devices
- Clearing browser data removes stored tasks
- No authentication or cloud storage

These limitations are intentional to keep the project lightweight and aligned with static hosting.

---

## What I Learned From This Project

- Difference between static hosting and backend-based applications
- How browsers load JavaScript files and why script placement matters
- Debugging deployment issues using browser DevTools
- Structuring projects correctly for production environments
- Shipping a complete project end-to-end

---

## Future Enhancements

- Mark tasks as completed
- Edit existing tasks
- Export and import tasks
- Dark mode
- Progressive Web App (PWA) support
- Full-stack version with backend synchronization

---

## License

This project is open for learning and personal use.
