const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const transactionRoutes = require("./routes/transactionRoutes");
const cors = require("cors");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173", 
  "https://mern-personal-finanace-tracker.vercel.app"
];

app.use(
    cors({
        origin: allowedOrigins,
        methods: ["GET", "PUT", "POST", "DELETE"],
        allowedHeaders: ["Content-type"],
    })
)

app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});