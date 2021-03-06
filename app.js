const express = require('express');
const cors = require('cors');
const usersRouter = require('./routers/usersRouter');
const adminsRouter = require('./routers/adminsRouter');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/api/users', usersRouter);
app.use('/api/admins', adminsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message || 'Internal Server Error',
    },
  });
});

module.exports = app;
