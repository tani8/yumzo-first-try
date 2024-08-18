const Recipe = require('../models/Recipe');

// @desc    Create a new recipe
exports.createRecipe = async (req, res) => {
  const { title, description, ingredients, steps, instagramLink } = req.body;

  try {
    const newRecipe = new Recipe({
      title,
      description,
      ingredients,
      steps,
      instagramLink,
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get all recipes
exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
