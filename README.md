# 🥢 Kedai Makan Saya - Korean Food App

Welcome to **Kedai Makan Saya**, a modern, responsive Korean food menu web application built using React and styled with CSS Grid and Flexbox. This project demonstrates dynamic component rendering, custom mapping arrays, props parsing, and bulletproof responsive grid layouts.

---

## 🚀 Features

- **Dynamic Headers:** Displays restaurant metadata info, taglines, and live star ratings dynamically using reusable props.
- **Category Grouping:** Uses a structural `MenuCategory` component to seamlessly loop through unique arrays of menu items (Appetizers, Mains, Desserts).
- **Responsive Card Grid:** Fully optimized for desktop, tablet, and mobile screens. Lonelier rows containing 1 or 2 items stay beautifully centered without stretching out of proportion.
- **Interactive Ordering:** Built-in modular order handler alerts the system and processes user commands when an item button is clicked.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React (Vite environment)
- **Styling:** Custom CSS (Native CSS Grid & Flexbox)
- **Icons:** Emojis (🫛, 🌶️)

---

## 📦 How to Run This Project Locally

Follow these simple steps to clone down and get this app running on your local machine.

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### 2. Clone the Repository
Open your terminal or command prompt and run:
```bash
git clone [https://github.com/ericcfrancis/restaurant-menu-display.git](https://github.com/ericcfrancis/restaurant-menu-display.git)
```

### 3. Clone the Repository
```bash
cd restaurant-menu-display
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Start the Development Server
```bash
npm run dev
```
Once it finishes compiling, hold Ctrl (or Cmd on Mac) and click the local link output in your terminal window (typically http://localhost:5173) to open up your app!

📂 Component Structure
Here is how the React components break down and communicate state across the application file tree:

- App.jsx - The main architectural orchestrator holding the global state and menu datasets.

  - RestaurantHeader.jsx - Renders the top presentation billboard and ranking metrics.

  - MenuCategory.jsx - Loops over distinct item categories arrays safely.

    - MenuItem.jsx - Handles layout constraints and rendering for individual interactive food cards.
