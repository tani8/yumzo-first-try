const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const recipeRoutes = require('./routes/recipeRoutes');
app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Recipe Sharing API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
