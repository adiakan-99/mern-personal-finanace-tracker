const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const transactionRoutes = require("./routes/transactionRoutes");
const cors = require("cors");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
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