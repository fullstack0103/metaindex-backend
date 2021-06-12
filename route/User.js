const express = require('express');
const UserIndex = require('../DB/User');
const route = express.Router();

route.post('/upload', async (req, res) => {
    const { userId, image } = req.body;
    let user = {};
    user.userId = userId;
    user.image = image;
    let userModel = new UserIndex(user);
    await userModel.save();
    res.json(userModel);
})

module.exports = route;