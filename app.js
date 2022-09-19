const express = require('express')
const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)
const morgan = require('morgan')
const passport = require('passport')

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Error handlers
const errorHandlers = require("./handlers/errorHandler")
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);

if (process.env.NODE_ENV === "DEVELOPMENT") {

  app.use(morgan('dev'));

  app.use(errorHandlers.developmentErrors);

} else {

  app.use(errorHandlers.productionErrors);

}

//  Mongo db Sessionstore 
const store = new MongoDBSession({
  uri: process.env.MONGO_URI,
  collection: "account-user-sessions",
})

//  Session Setup
app.use(session({

  // It holds the secret key for session
  secret: 'keyboard cat',

  // Forces the session to be saved
  // back to the session store
  resave: true,

  // Forces a session that is "uninitialized"
  // to be saved to the store
  saveUninitialized: true,

  cookie: {

    // Session expires after 1 min of inactivity.
    expires: 60000
    // expires: 1000 * 60 * 60 * 24
  },
  store: store
}))

// Passport config
require('./config/passport')(passport)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())


// Routes 
const routes = require('./routes/user-account-access.route');
const mainRoutes = require('./routes/main.route');
app.use('/api/users', routes)
app.use('/api/main', mainRoutes)

module.exports = app;