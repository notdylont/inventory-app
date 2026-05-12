const express = require('express');
const modulesRouter = require('./routes/modulesRouter');
const resourcesRouter = require('./routes/resourcesRouter');
const path = require('node:path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.redirect('/modules');
});

app.use('/modules', modulesRouter);
app.use('/resources', resourcesRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}.\nLive at http://localhost:${PORT}`);
});
