const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const userName = req.query.userName;
    const userId = req.query.userId;
    const userCity = req.query.userCity;

    // Create an object with the user data
    const userData = {
        Username: userName,
        User_ID: userId,
        City: userCity
    };

    // Respond with JSON
    res.json(userData);
});

module.exports = router;
