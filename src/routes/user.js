const router = require('express').Router();

router.get('/usertest', (req, res) => {
  res.send('User test route');
});

router.post('/userposttest', (req, res) => {
  const username = req.body.username;
  res.send(`Username: ${username}`);
});

module.exports = router;
