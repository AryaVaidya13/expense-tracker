import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Expense from './models/expense.model.js';  // Make sure this path is correct
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json()); 

app.get("/api/expenses", async (req,res) => {
    try {
        const expenses = await Expense.find({});
        res.status(200).json({ success: true, data: expenses});
    }catch(error) {
        console.log("error in fetching expenses:",error.message);
        res.status(500).json({ success: false, message: "Server error"});
    }
})

app.post("/api/expenses", async (req,res) => {
    const expense = req.body;

    if (!expense.name || !expense.price) {
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }
    const newExpense = new Expense(expense)

    try {
        await newExpense.save();
        res.status(201).json({success: true, data: newExpense});
    }
    catch(error) {
        console.error("Error in create expense:", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
});

app.put("/api/expenses/:id", async (req,res) => {
    const {id} = req.params;

    const expense = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return req.status(404).json({success:false, message:"Invalid Expense Id"});
    }

    try {
        const updatedExpense = await Expense.findByIdAndUpdate(id, expense,{new:true});
        res.status(200).json({ success: true, data: updatedExpense});
    }catch(error) {
        res.status(500).json({success: false, message: "Server error"});
    }
});

app.delete("/api/expenses/:id", async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return req.status(404).json({success:false, message:"Invalid Expense Id"});
    }

    try {
        await Expense.findByIdAndDelete(id);
        res.status(201).json({succes: true, message: "Expense deleted"})
    }catch(error){
        console.log("error in deleting expense:",error.message);
        res.status(500).json({succes: false, message: "Server error"})
    }
});

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});

