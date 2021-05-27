'use strict';

const Koa = require('koa');
const Pug = require('koa-pug');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

const router = require('./router');
const port = 3000;

const pug = new Pug({
  viewPath: './views',
  app
})

app
  .use(bodyParser())
  .use(router.routes())
  .listen(port);

console.log(`Server listening on port ${port}!`);