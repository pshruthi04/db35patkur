var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var macbook_controller = require('../controllers/macbook'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// macbook ROUTES /// 
 
// POST request for creating a macbook.  
router.post('/macbook', macbook_controller.macbook_create_post); 
 
// DELETE request to delete macbook. 
router.delete('/macbook/:id', macbook_controller.macbook_delete); 
 
// PUT request to update macbook. 
router.put('/macbook/:id', 
macbook_controller.macbook_update_put); 
 
// GET request for one macbook. 
router.get('/macbook/:id', macbook_controller.macbook_detail); 
 
// GET request for list of all macbook items. 
router.get('/macbook', macbook_controller.macbook_list); 
 
module.exports = router;