const bodyParser = require('body-parser');
const peopleRoute = require('./peopleRoute');
const levelsRoute = require('./levelsRoute');  
const classesRoute = require('./classesRoute');
const enrollmentRoute = require('./enrollmentRoute');
const enrolledRoute = require('./enrolledRouter');
const EnrollmentMiddleware = require('../controllers/middlerware/EnrollmentMiddleware');

module.exports = app => {
  const prefix = '/api';

  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.json('index...');
  });

  app.use(`${prefix}/people`, peopleRoute); 

  app.use(`${prefix}/people/enrollment`, enrolledRoute);

  app.use(`${prefix}/people/:personId/enrollment`, EnrollmentMiddleware.setPerson);
  app.use(`${prefix}/people/:personId/enrollment`, enrollmentRoute); 
  
  app.use(`${prefix}/levels`, levelsRoute);
  app.use(`${prefix}/classes`, classesRoute);
}