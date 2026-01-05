import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './src/config/db.js';

dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'SubSentry Backend is healthy',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is live on http://localhost:${PORT}`);
});
