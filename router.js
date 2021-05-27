'use strict';

const Router = require('@koa/router');
const router = new Router();

const thoughtController = require('./controllers/api.controller');
const viewController = require('./controllers/views.controller');

router.get('/thought', thoughtController.getAll);
router.post('/thought', thoughtController.post);
router.get('/', viewController.renderHomepage);
router.get('(.*)', viewController.render404);

module.exports = router;