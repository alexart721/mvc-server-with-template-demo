'use strict';
const thought = require('../models/thought.model');

const renderHomepage = async ctx => {
  try {
    const thoughts = await thought.find();
    await ctx.render('index', { title: 'ThoughtStack', thoughts })
  } catch (err) {
    ctx.status = 500;
    render500();
    console.error(err);
  }
};

const render404 = async ctx => {
  await ctx.render('404'), { title: '404 Not Found' };
}

const render500 = async ctx => {
  await ctx.render('500', { title: 'Server error' });
}

module.exports = {renderHomepage, render404, render500};