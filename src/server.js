

'use strict';

/******************************************************************************
 * Module dependencies.
 *****************************************************************************/

var express = require('express');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var util = require('util');
var bunyan = require('bunyan');
var config = require('./config/config');

// set up database for express session
var MongoStore = require('connect-mongo')(expressSession);
var mongoose = require('mongoose');
const path = require('path')

/**
 * CONTROLLER
 */

const LojasController = require('../src/controllers/LojasController')
const HomeController = require('../src/controllers/HomeController')
const EmpresaController = require('../src/controllers/EmpresasController');
const ConcorrentesController = require('../src/controllers/ConcorrentesController');
const OperadorsController = require('../src/controllers/OperadorsController');
const InventariosController = require('../src/controllers/InventariosController')


/**
 * FINAL CONTROLLER
 */
// Start QuickStart here

var OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

var log = bunyan.createLogger({
  name: 'Microsoft OIDC Example Web Application'
});



const AuthController = require('./controllers/AuthController')



passport.serializeUser(function (user, done) {
  done(null, user.oid);
});

passport.deserializeUser(function (oid, done) {
  findByOid(oid, function (err, user) {
    done(err, user);
  });
});

// array to hold logged in users
var users = [];

var findByOid = function (oid, fn) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    log.info('we are using user: ', user);
    if (user.oid === oid) {
      return fn(null, user);
    }
  }
  return fn(null, null);
};


passport.use(new OIDCStrategy({
  identityMetadata: config.creds.identityMetadata,
  clientID: config.creds.clientID,
  responseType: config.creds.responseType,
  responseMode: config.creds.responseMode,
  redirectUrl: config.creds.redirectUrl,
  allowHttpForRedirectUrl: config.creds.allowHttpForRedirectUrl,
  clientSecret: config.creds.clientSecret,
  validateIssuer: config.creds.validateIssuer,
  isB2C: config.creds.isB2C,
  issuer: config.creds.issuer,
  passReqToCallback: config.creds.passReqToCallback,
  scope: config.creds.scope,
  loggingLevel: config.creds.loggingLevel,
  nonceLifetime: config.creds.nonceLifetime,
  nonceMaxAmount: config.creds.nonceMaxAmount,
  useCookieInsteadOfSession: config.creds.useCookieInsteadOfSession,
  cookieEncryptionKeys: config.creds.cookieEncryptionKeys,
  clockSkew: config.creds.clockSkew,
},
  function (iss, sub, profile, accessToken, refreshToken, done) {
    if (!profile.oid) {
      return done(new Error("No oid found"), null);
    }
    // asynchronous verification, for effect...
    process.nextTick(function () {
      findByOid(profile.oid, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          // "Auto-registration"
          users.push(profile);
          return done(null, profile);
        }
        return done(null, user);
      });
    });
  }
));


//-----------------------------------------------------------------------------
// Config the app, include middlewares
//-----------------------------------------------------------------------------
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.logger());
app.use(methodOverride());
app.use(cookieParser());

// set up session middleware
if (config.useMongoDBSessionStore) {
  mongoose.connect(config.databaseUri);
  app.use(express.session({
    secret: 'secret',
    cookie: { maxAge: config.mongoDBSessionMaxAge * 1000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      clear_interval: config.mongoDBSessionMaxAge
    })
  }));
} else {
  app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: false }));
}

app.use(bodyParser.urlencoded({ extended: true }));


app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.resolve(__dirname, 'public')));

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
};

app.get('/', function (req, res) {

  res.render('index', { user: req.user });
});


app.get('/account', ensureAuthenticated, HomeController.account)

app.get('/info', ensureAuthenticated, function (req, res) {
  res.render('info', { user: req.user });
});

/**endpoints */

app.get('/index', ensureAuthenticated, HomeController.show)
app.get('/lojas', ensureAuthenticated, LojasController.list)
app.get('/lojas-add-form', ensureAuthenticated, LojasController.form)
app.post('/lojas', ensureAuthenticated, LojasController.create)
app.get('/lojas/list', ensureAuthenticated, LojasController.listAll)
app.get('/empresas', ensureAuthenticated, EmpresaController.list)
app.get('/concorrentes', ensureAuthenticated, ConcorrentesController.list)
app.get('/concorrentes-add', ensureAuthenticated, ConcorrentesController.form)
app.post('/concorrentes', ensureAuthenticated, ConcorrentesController.store)
app.get('/operadores', ensureAuthenticated, OperadorsController.list)
app.get('/inventarios-add', ensureAuthenticated, InventariosController.form)
app.post('/inventarios', ensureAuthenticated, InventariosController.add)
app.get('/inventarios', ensureAuthenticated, InventariosController.list)



/**fim */



app.get('/login',
  function (req, res, next) {
    passport.authenticate('azuread-openidconnect',
      {
        response: res,                      // required
        resourceURL: config.resourceURL,    // optional. Provide a value if you want to specify the resource.
        customState: 'my_state',            // optional. Provide a value if you want to provide custom state value.
        failureRedirect: '/'
      }
    )(req, res, next);
  },
  function (req, res) {
    log.info('Login was called in the Sample');
    res.redirect('/');
  });


app.get('/auth/openid/return',
  function (req, res, next) {
    passport.authenticate('azuread-openidconnect',
      {
        response: res,                      // required
        failureRedirect: '/'
      }
    )(req, res, next);
  },
  function (req, res) {
    log.info('We received a return from AzureAD.');
    res.redirect('/');
  });

app.post('/auth/openid/return',
  function (req, res, next) {
    passport.authenticate('azuread-openidconnect',
      {
        response: res,                      // required
        failureRedirect: '/'
      }
    )(req, res, next);
  },
  function (req, res) {
    log.info('We received a return from AzureAD.');
    res.redirect('/account');
  });

app.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    req.logOut();
    res.redirect(config.destroySessionUrl);
  });
});

app.get('/root', AuthController.root)



app.listen(process.env.PORT || 3200)

