const express = require('express');
const noteRouter = express.Router();
const noteController = require('../controllers/note.controller');

noteRouter.get('', noteController.getNote);

const routes = app => {
  app.use('/note', noteRouter);
};

module.exports = routes;
