const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const { verifyTokenAndAuth } = require('./verifyToken.js');

router.put('/:id', verifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
