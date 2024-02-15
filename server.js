const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./src/controllers');
const exphbs = require('express-handlebars');
const helpers = require('./src/utils/helpers');

const sequelize = require('./src/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//PJM Added this in the hopes of reducing logging messages by "sess"
const customLogger = {
   debug: console.log, // Log debug messages to console
   info: console.info, // Log info messages to console
   warn: console.warn, // Log warn messages to console
   error: console.error // Log error messages to console
 };

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Not quite Super secret secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
    logFn: customLogger
  }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/src/public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});
