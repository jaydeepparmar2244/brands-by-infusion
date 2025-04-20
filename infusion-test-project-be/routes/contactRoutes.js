const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/submit', async (req, res) => {
  try {
    const { name, email, plan } = req.body;

    if (!name || !email || !plan) {
      return res.status(400).json({ 
        message: 'All fields are required',
        missingFields: {
          name: !name,
          email: !email,
          plan: !plan
        }
      });
    }

    if (!['monthly', 'annual'].includes(plan.toLowerCase())) {
      return res.status(400).json({ 
        message: 'Invalid plan type. Must be either "monthly" or "annual"'
      });
    }

    const contact = new Contact({
      name,
      email,
      plan: plan.toLowerCase()
    });

    await contact.save();

    res.status(201).json({
      message: 'Contact form submitted successfully',
      data: contact
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation error',
        errors: Object.values(error.errors).map(err => err.message)
      });
    }
    res.status(500).json({ 
      message: 'Error submitting contact form',
      error: error.message 
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching contacts',
      error: error.message 
    });
  }
});

module.exports = router; 