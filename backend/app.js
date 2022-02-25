const express = require('express');
const app = express();
require('dotenv').config();
const recipesRoutes = require('./routes/recipesRoutes');
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



//!*************Middleware for CORS Access-Control-Allow-Origin header *****************

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

//!*************Creating ROUTES*****************
app.use('/recipes', recipesRoutes);


/** 404 handler: matches unmatched routes; raises NotFoundError. */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Error handler: logs stacktrace and returns JSON error message. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});
// end



module.exports = app;