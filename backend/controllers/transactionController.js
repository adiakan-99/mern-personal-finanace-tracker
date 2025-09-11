const Transaction = require("../models/Transaction");

const createTransaction = async (req, res) => {
    try {
        const { title, amount, date, category } = req.body;

        if (!title || !amount || !date || !category) {
            return res.status(400).json({ error: "Please provide all the required fields" });
        }        

        const transaction = await Transaction.create({
            title,
            amount,
            date,
            category,
        });

        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTransactions = async (req, res) => {
    try {
        const { category, sort } = req.query;

        let query = {};
        if (category) {
            query.category = category;
        }

        let transactionsQuery = Transaction.find(query);

        if (sort) {
            transactionsQuery = transactionsQuery.sort(sort);
        }

        const transactions = await transactionsQuery;
        res.status(201).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTransactionById = async (req, res) => {
    try {
        const { id } = req.params;

        const transaction = await Transaction.findById(id);

        if (!transaction) {
            return res.status(404).json({ error: "Transaction not found" });
        }

        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedTransaction = await Transaction.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updatedTransaction) {
            return res.status(404).json({ error: "Transaction not found" });
        }

        res.status(200).json(updatedTransaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTransaction = await Transaction.findByIdAndDelete(id);

        if (!deletedTransaction) {
            return res.status(404).json({ error: "Transaction not found" });
        }

        res.status(200).json({ message: "Transaction deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTransaction,
    getTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction
};