const mongoose = require('mongoose');
const app = require('./app');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.set('port', process.env.PORT || 9999);

app.listen(app.get('port'), (err) => {
  if (err) {
    console.log('Error in server setup: ' + err);
  }
  console.log(`Server running on port:${app.get('port')}`);
});

mongoose.set('useCreateIndex', true).connect(
  process.env.CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Connected to Mongo Database')
);
