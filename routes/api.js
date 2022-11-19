
const router = require('express').Router();
//require('../db');


const apiUserLoginRouter = require('./api/users/login');
const apiUserRegisterRouter = require('./api/users/register');
const apiCommentsCommentRouter = require('./api/comments/comment');

router.use('/users/login',apiUserLoginRouter);
router.use('/users/register',apiUserRegisterRouter);
router.use('/comments',apiCommentsCommentRouter);


module.exports = router;