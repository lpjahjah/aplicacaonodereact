const express = require('express');

const ctrs = require('./controllers/index');

const routes = express.Router();

routes.post('/sessions', ctrs.SessionController.create);

routes.get('/ongs', ctrs.OngController.index);
routes.post('/ongs', ctrs.OngController.create);

routes.get('/profile', ctrs.ProfileController.index);

routes.get('/incidents', ctrs.IncidentController.index);
routes.post('/incidents', ctrs.IncidentController.create);
routes.delete('/incidents/:id', ctrs.IncidentController.delete);

module.exports = routes;