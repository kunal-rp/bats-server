const express = require('express');
const HttpStatus = require('http-status-codes');

const router = express.Router();

router.use('/users', require('./users'));
router.use('/ringdowns', require('./ringdowns'));
router.use('/hospitalstatuses', require('./hospitalStatuses'));
router.use('/ambulances', require('./ambulances'));
router.use('/emscalls', require('./emsCalls'));

router.get('/health', (req, res) => {
  res.status(HttpStatus.NO_CONTENT).end();
});

module.exports = router;
