# Personal Finance Tracker (MERN + Tailwind)

A simple finance tracker that helps you manage income and expenses with CRUD operations, filters, summaries, and charts. Built using the **MERN stack** with a clean UI powered by **TailwindCSS**.

---

## 🚀 Features

- ➕ **Add / Edit / Delete transactions**
- 🔍 **Filters** (by category, date range, and type: income/expense)
- 📊 **Summary cards** (Income, Expense, Balance)
- 📈 **Charts** with [Recharts](https://recharts.org/)
  - Pie chart (category-wise expenses)
  - Bar chart (monthly income vs expenses)
- 🎨 **Responsive UI** with TailwindCSS
- ⚡ Fast & lightweight with the MERN stack

---

## 🛠 Tech Stack

- **Frontend:** React, TailwindCSS, Recharts  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/mern-finance-tracker.git
cd mern-finance-tracker
````

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

> Runs on [http://localhost:5000](http://localhost:5000) by default.

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

> Runs on [http://localhost:3000](http://localhost:3000) by default.

---

## 📡 API Endpoints

### Transactions

* `POST /api/transactions` → Create a new transaction
* `GET /api/transactions` → Get all transactions
* `GET /api/transactions/:id` → Get a single transaction by ID
* `PUT /api/transactions/:id` → Update a transaction
* `DELETE /api/transactions/:id` → Delete a transaction

---

## 🚀 Deployment Links

* **Live App URL:** [Your Deployed Frontend Link](https://your-app-url.com)
* **API Base URL:** [Your Deployed Backend Link](https://your-api-url.com)

---

## 👨‍💻 Author

Built with ❤️ by [Your Name](https://github.com/your-username)

```

---

👉 You can copy this into your `README.md`.  
Do you want me to also add **sample environment variables (`.env.example`)** for the backend (like `MONGO_URI`, `PORT`), so setup is easier for others?
```
