const mysql = require('mysql2');
const express = require('express'); 
const dotenv = require('dotenv');
const app = express();
app.use(express.json())
dotenv.config();
// ConnectDB



// Define Route
const productRoutes = require('./app.js');
app.use('/api', booksRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


