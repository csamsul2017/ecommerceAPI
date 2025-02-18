const router = require('express').Router();

router.get('/ordertest', (req, res) => {
  console.log('Order test route');
  res.send('Order test route');
});

module.exports = router;
