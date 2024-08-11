const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

// Mock database for storing recipes
const recipes = [];

// Helper function to parse link metadata
const parseLink = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const title = $('meta[property="og:title"]').attr('content') || $('title').text();
    const description = $('meta[property="og:description"]').attr('content') || '';
    const image = $('meta[property="og:image"]').attr('content') || '';
    return { title, description, image };
  } catch (error) {
    console.error('Error parsing link:', error);
    return { title: 'Unknown Title', description: '', image: '' };
  }
};

// Route to add a recipe link
router.post('/share', async (req, res) => {
  const { link } = req.body;
  if (!link) {
    return res.status(400).json({ error: 'No link provided' });
  }

  const metadata = await parseLink(link);
  const recipe = { link, ...metadata, sharedAt: new Date() };
  recipes.push(recipe);
  res.status(201).json({ message: 'Recipe link shared successfully', recipe });
});

// Route to get all shared recipes
router.get('/', (req, res) => {
  res.json(recipes);
});

module.exports = router;
