var macbook = require('../models/macbook');

// List of all macbook 
exports.macbook_list = async function (req, res) {
    try {
        themacbook = await macbook.find();
        res.send(themacbook);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific macbook. 
exports.macbook_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: macbook detail: ' + req.params.id);
};

// Handle macbook create on POST. 
exports.macbook_create_post = async function (req, res) {
    console.log(req.body)
    let document = new macbook();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"macbook_type":"goat", "cost":12, "size":"large"} 
    document.macbook_type = req.body.macbook_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle macbook delete on DELETE. 
exports.macbook_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await macbook.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

//Handle macbook update form on PUT. 
exports.macbook_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await macbook.findById(req.params.id)
        // Do updates of properties 
        if (req.body.macbook_type)
            toUpdate.macbook_type = req.body.macbook_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

exports.macbook_view_all_Page = async function (req, res) {
    try {
        themacbook = await macbook.find();
        res.render('macbook', { title: 'macbook Search Results', results: themacbook });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific macbook. 
exports.macbook_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await macbook.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle a show one view with id specified by query 
exports.macbook_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await macbook.findById(req.query.id)
        res.render('macbookdetail',
            { title: 'macbook Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
//Handle building the view for creating a macbook. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.macbook_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('macbookcreate', { title: 'macbook Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a macbook. 
// query provides the id 
exports.macbook_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await macbook.findById(req.query.id)
        res.render('macbookupdate', { title: 'macbook Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query 
exports.macbook_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await macbook.findById(req.query.id) 
        res.render('macbookdelete', { title: 'macbook Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 