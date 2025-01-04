const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
const path = require('path');

// Load env vars
dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
// Update CORS for production
app.use(cors({
  origin: ['http://localhost:3000', 'http://phycraftacademy.com'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Add this if you want to serve frontend from the same server
// app.use(express.static(path.join(__dirname, '../physcraft/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../physcraft/build', 'index.html'));
// });

// Routes
const applicationRoutes = require('./routes/applicationRoutes');
app.use('/api/applications', applicationRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});