var macbook = require('../models/macbook'); 
 
// List of all macbook 
exports.macbook_list = async function(req, res) { 
    try{ 
        themacbook = await macbook.find(); 
        res.send(themacbook); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }  
}; 
 
// for a specific macbook. 
exports.macbook_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: macbook detail: ' + req.params.id); 
}; 
 
// Handle macbook create on POST. 
exports.macbook_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new macbook(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"macbook_type":"goat", "cost":12, "size":"large"} 
    document.macbook_type = req.body.macbook_type; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle macbook delete form on DELETE. 
exports.macbook_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: macbook delete DELETE ' + req.params.id); 
}; 
 
// Handle macbook update form on PUT. 
exports.macbook_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: macbook update PUT' + req.params.id); 
}; 

exports.macbook_view_all_Page = async function(req, res) { 
    try{ 
        themacbook = await macbook.find(); 
        res.render('macbook', { title: 'macbook Search Results', results: themacbook }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};