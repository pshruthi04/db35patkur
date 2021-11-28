var express = require('express');
const macbook_controlers= require('../controllers/macbook');
var router = express.Router();

/* GET macbook page. */
router.get('/', macbook_controlers.macbook_view_all_Page );
module.exports = router;

// GET request for one macbook.
router.get('/macbook/:id', macbook_controlers.macbook_detail);
module.exports = router;

/* GET detail macbook page */
router.get('/detail', macbook_controlers.macbook_view_one_Page);


/* GET create macbook page */
router.get('/create', macbook_controlers.macbook_create_Page);


/* GET create update page */
router.get('/update', macbook_controlers.macbook_update_Page);

/* GET create macbook page */
router.get('/delete', macbook_controlers.macbook_delete_Page);
module.exports = router;