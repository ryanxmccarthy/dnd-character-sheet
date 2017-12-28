var path = require('path');

module.exports = app => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });

  app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/form.html'));
  });

  app.get('/:name', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  })

  app.get('/character/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  })
};