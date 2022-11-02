const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.post('./posts', postRoutes);

module.exports = router;