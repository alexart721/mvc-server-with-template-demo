'use strict';

const thought = require('../models/thought.model');

exports.getAll = async ctx => {
  try {
    ctx.body = await thought.find();
  } catch (err) {
    ctx.status = 500;
    console.error(err);
  }
};

exports.post = async ctx => {
  try {
    await thought.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = 'Created';
  } catch (err) {
    ctx.status = 500;
    console.errror(err);
  }
};