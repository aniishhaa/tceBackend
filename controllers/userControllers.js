const User = require('../models/User');
const Team = require('../models/Team');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createTeam = async (req, res) => {
    const team = new Team({
        teamName: req.body.teamName,
        members: req.body.members,
    });

    try {
        const newTeam = await team.save();
        res.status(201).json(newTeam);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
