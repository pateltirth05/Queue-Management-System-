# 🏪 Queue Management System

A simple and efficient queue management system built with React that helps businesses manage customer flow digitally — no paper, no confusion.

## 🚀 Live Demo
> Coming soon / Add your deployed link here

## 📸 Screenshots
> Add screenshots of your project here

---

## ✨ Features

- ➕ Add customers to queue with name and service type
- 🟡 Track customer status — Waiting, Serving, Completed
- ✅ Update status with one click
- ❌ Remove customers from queue
- 🎨 Color coded status display
- 📱 Responsive design with Bootstrap

---

## 🛠️ Technologies Used

- **React JS** — Frontend framework
- **Bootstrap** — Styling and layout
- **React Icons** — Icons
- **useState** — State management

---

## 📁 Project Structure

```
src/
├── components/
│   ├── QueueForm.jsx       → Add customer form
│   └── QueueDisplay.jsx    → Queue table with actions
├── App.jsx                 → Main component, state management
└── App.css                 → Custom styles
```

---

## ⚙️ How It Works

```
1. Enter customer name and select service type
2. Click "Add Customer" → customer added to queue
3. Click "Serve" → status changes to Serving
4. Click "Complete" → status changes to Completed
5. Click "Remove" → customer removed from queue
```

---

## 🏃 Getting Started

### Prerequisites
- Node.js installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/queue-management-system

# Go to project folder
cd queue-management-system

# Install dependencies
npm install

# Start the project
npm run dev
```

---

## 🧠 Key Concepts Used

- **Props** — Passing functions from App to child components
- **useState** — Managing queue data
- **Array methods** — map, filter, spread operator for queue operations
- **Conditional rendering** — Showing buttons based on status

---

## 🙋‍♂️ Author

**Your Name**  
BE CSE Student | React Developer  
[GitHub](https://github.com/yourusername) • [LinkedIn](https://linkedin.com/in/yourusername)

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).