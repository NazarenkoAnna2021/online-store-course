const Router = require('express');
const router = new Router();
const deviseRouter = require('./deviseRouter');
const userRouter = require('./userRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');

router.use('/devise', deviseRouter);
router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/type', typeRouter);

module.exports = router;