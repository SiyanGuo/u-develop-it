const express = require('express');
const router= express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voteRoutes'));
router.use(require('./voteRoutes'));

module.exports = router;
