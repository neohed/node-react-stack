const express = require('express');
const noteRouter = express.Router();
const noteController = require('../controllers/note.controller');

noteRouter.get('', noteController.getNote);
noteRouter.post('', noteController.postNote);

const routes = app => {
  app.use('/note', noteRouter);
};

module.exports = routes
