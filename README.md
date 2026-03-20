# Dynamic Alert Buttons with Props (React + Vite)

## 📌 Overview
This project demonstrates how to dynamically render React components using an array of data. It focuses on passing props, using the `children` prop, handling events, and rendering lists with unique keys.

The application displays a toolbar with multiple buttons. Each button shows a different alert message when clicked.

---

## 🎯 Objectives
- Use `.map()` to render components dynamically
- Pass object properties as props
- Use the `children` prop for flexible content
- Implement event handlers
- Apply the `key` prop correctly in lists

---

## 🛠 Tech Stack
- React
- Vite
- JavaScript (ES6+)

---

## 📂 Project Structure
src/
  App.jsx
  Toolbar.jsx
  AlertButton.jsx

---

## 🚀 How to Run the Project

1. Clone the repository:
git clone https://github.com/your-username/dynamic-alert-buttons-react.git

2. Navigate to the project:
cd dynamic-alert-buttons-react

3. Install dependencies:
npm install

4. Start the development server:
npm run dev

---

## ⚙️ Features

- Dynamic rendering of buttons using `.map()`
- Custom alert messages per button
- Reusable `AlertButton` component
- Use of `children` prop for button labels
- Unique `key` prop for each element

---

## 🧪 Test Cases

### ✅ Normal Cases
1. Click "Download File" → Alert: Downloading!
2. Click "Share Document" → Alert: Sharing!
3. Click "Print Page" → Alert: Printing!

### ⚠️ Edge Cases
1. Button with empty message → Alert shows empty
2. Button with long message → Alert displays full text
3. Button with special characters → Alert shows correctly (e.g., ✅)

---

## 💡 Example Data

const buttons = [
  { id: 1, message: "Downloading!", children: "Download File" },
  { id: 2, message: "Sharing!", children: "Share Document" },
  { id: 3, message: "Printing!", children: "Print Page" },
  { id: 4, message: "", children: "Empty Message" },
  { id: 5, message: "This is a very long alert message for testing.", children: "Long Message" },
  { id: 6, message: "Done! ✅", children: "Special Characters" },
];

---

## 📽 Demonstration
A video demonstration is included showing:
- Application functionality
- Test cases (normal and edge cases)

---

## 📎 Author
Alex Torres
