const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '../', '../', 'karl-master', 'index.html'));
    res.render('index')
});

router.get("/about", function(req, res, next) {
  //  res.sendFile(path.join(__dirname, '../', 'views', 'ftg1.html'));
  res.render
});

module.exports = router;
