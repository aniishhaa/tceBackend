const express = require('express');
const { getUsers, createTeam } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getUsers);
router.post('/team', auth, createTeam);

module.exports = router;
