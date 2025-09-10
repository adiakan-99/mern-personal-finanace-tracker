const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        validate: {
            validator: function (value) {
                return value != 0;
            },
            message: "Amount cannot be 0",
        },
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
        validate: {
            validator: function (value) {
                return !isNaN(new Date(value).getTime());
            },
            message: "Invalid date format",
        },
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: {
        values: [
            "Income",
            "Food",
            "Rent",
            "Travel",
            "Entertainment",
            "Utilities",
            "Other",
        ],
        message: "Category must be one of the predefined values",
      },
    },
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);