const express = require('express');
const session = require('express-session');
const routes = require('./src/controllers');
const exphbs = require('express-handlebars');

const sequelize = require('./src/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./src/utils/hashHelpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Not quite Super secret secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});
