// routes/index.js
const express = require('express');
const router = express.Router();

// Homepage
router.get('/', (req, res) => {
  res.render('index');
});

// Programs page
router.get('/programs', (req, res) => {
  res.render('programs');
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact');
});

// Success page
router.post('/contact', (req, res) => {
  // Here you can handle the contact form submission
  console.log(req.body);
  res.render('success', { name: req.body.name });
});

module.exports = router;
