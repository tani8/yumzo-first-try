const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// Load environment variables
require('dotenv').config();

// Express session middleware
app.use(session({
  secret: process.env.GOOGLE_CLIENT_SECRET,
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Use authentication routes
app.use('/auth', authRoutes);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
},
(accessToken, refreshToken, profile, done) => {
  // Here, you would typically find or create a user in your database
  return done(null, profile);
}));

// Serialize user to store in the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user to retrieve from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});


// Example protected route
app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('Welcome to your dashboard!');
  } else {
    res.redirect('/auth/google/callback');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipeRoutes');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

const app = express();

// Express session middleware
app.use(session({
  secret: process.env.GOOGLE_CLIENT_SECRET,
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
},
(accessToken, refreshToken, profile, done) => {
  // Here, you would typically find or create a user in your database
  return done(null, profile);
}));

// Serialize user to store in the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user to retrieve from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message)
  });

// Connect to MongoDB
connectDB();


// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Example protected route
app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('Welcome to your dashboard!');
  } else {
    res.redirect('/auth/google');
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use('/api/recipes', recipeRoutes);
*/