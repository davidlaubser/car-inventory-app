require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const carRoutes = require('./src/routes/carRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.error("Error connecting to the database", err);
});

// Routes
app.use('/api/cars', carRoutes);

const port = process.env.PORT || 5003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

