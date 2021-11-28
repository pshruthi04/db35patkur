var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var macbook_controller = require('../controllers/macbook');

/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// gas ROUTES ///
// POST request for creating a macbook.
router.post('/resource/macbook', macbook_controller.macbook_create_post);
// DELETE request to delete macbook.
router.delete('/resource/macbook/:id', macbook_controller.macbook_delete);
// PUT request to update macbook.
router.put('/resource/macbook/:id', macbook_controller.macbook_update_put);
// GET request for one macbook.
router.get('/resource/macbook/:id', macbook_controller.macbook_detail);
// GET request for list of all macbook items.
router.get('/resource/macbook', macbook_controller.macbook_list);
module.exports = router;