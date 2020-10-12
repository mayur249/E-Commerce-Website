var express = require('express');
var router = express.Router();
const { signout, signup, signin, isSignedIn } = require('../controllers/auth');
const { check, validationResult } = require('express-validator');


router.post('/signup', [
    check('email').isEmail().withMessage("Enter a proper email"),
    check('name').isLength({ min: 2}).withMessage("Enter a proper name"),
    check('password').isLength({ min: 5}).withMessage("Password length should be more"),
], signup);

router.post('/signin', [
    check('email').isEmail().withMessage("Enter a proper email"),
    check('password').isLength({ min: 5}).withMessage("password field is required"),
], signin);



router.get('/signout', signout);


module.exports = router;


