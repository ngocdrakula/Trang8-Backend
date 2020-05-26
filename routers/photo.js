const express = require('express');
const cloudOrigin = require('../cloudOrigin');

const photoRouter = express.Router();

photoRouter.get("/:photo", (req, res) => {
    res.redirect(cloudOrigin + req.params.photo);
});

module.exports = photoRouter;