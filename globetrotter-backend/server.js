require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const destinationRoutes = require('./routes/destination');
const userRoutes = require('./routes/user');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const dbPassword = encodeURIComponent('Rakeshkr@2009');
const connectionString = `mongodb+srv://rakeshkr4208:${dbPassword}@cluster0.cepkq.mongodb.net/globetrotter?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/destinations', destinationRoutes);
app.use('/api/users', userRoutes);

// Server Startup
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
