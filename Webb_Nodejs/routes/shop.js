const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '../', '../', 'karl-master', 'index.html'));
    res.render('index')
});

router.get("/shop", function(req, res, next) {
  //  res.sendFile(path.join(__dirname, '../', 'views', 'ftg1.html'));
  res.render("shop")
});
router.get("/checkout", (req, res)=>{
  res.render("checkout")
})
router.get('/cart', (req,res)=> {
  res.render("cart")
})

module.exports = router;
