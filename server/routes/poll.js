const router = require('express').Router();
const controller = require('../controller/poll');
const auth = require('../middleware/auth');




router.post('/', auth, controller.createPoll);
router.get('/', auth, controller.showPolls);
router.get('/getpoll', auth, controller.getPoll);
router.get('/user', auth, controller.getPolls);


module.exports = router;