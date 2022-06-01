const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controllers')
const sequelize = require('./config/connection')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3002;
const hbs = exphbs.create();

app.use(session({
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}))
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({force: false}).then(() =>  {
    app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))
})