import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mysql from 'mysql2/promise';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config(); // Load environment variables from .env file

const app = express();

// Configure CORS (Update the origin as needed for production)
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

const dbConfig = {
  host: process.env.DB_SERVER || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'tuku',
};

const poolPromise = mysql.createPool(dbConfig);

app.post('/api/emails/add-email', async (req, res) => {
  try {
    const { email } = req.body;
    const query = `INSERT INTO emails (email) VALUES (?)`;

    const [result] = await poolPromise.execute(query, [email]);

    res.status(200).send('Email added successfully');
  } catch (err) {
    res.status(500).send('Error inserting data');
    console.error('SQL error', err);
  }
});

// Serve static files from the React app (built by Vite)
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
