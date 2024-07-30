const express = require('express');
const { getEvents, createEvent } = require('../controllers/eventController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getEvents);
router.post('/', auth, createEvent);

module.exports = router;
