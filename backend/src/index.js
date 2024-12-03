const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');  // MongoDB connection
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const port = 5000;

require('dotenv').config(); // Load environment variables

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use Routes
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
