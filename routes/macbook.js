var express = require('express');
const macbook_controllers= require('../controllers/macbook');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('macbook', { title: 'Search Results for Macbook' });
});

/* GET detail macbook page */ 
router.get('/detail', macbook_controllers.macbook_view_one_Page); 

/* GET create costume page */ 
router.get('/create', macbook_controllers.macbook_create_Page); 
 

module.exports = router;
