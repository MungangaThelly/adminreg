require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const app = express();
const port = 5000;

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

// Use Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/protected', protectedRoutes);

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
