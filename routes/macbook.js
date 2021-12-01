var express = require('express'); 
const macbook_controlers= require('../controllers/macbook'); 
var router = express.Router(); 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET macbooks */ 
router.get('/', macbook_controlers.macbook_view_all_Page ); 
/* GET detail macbook page */ 
router.get('/detail', macbook_controlers.macbook_view_one_Page); 
/* GET create macbook page */ 
router.get('/create',secured, macbook_controlers.macbook_create_Page);
/* GET create update page */ 
router.get('/update',secured, macbook_controlers.macbook_update_Page); 
/* GET create macbook page */ 
router.get('/delete',secured, macbook_controlers.macbook_delete_Page); 
module.exports = router; 