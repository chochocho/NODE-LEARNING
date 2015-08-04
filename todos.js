var express = require('express');

var router = express.Router();

var todoItems = [
    {id: 1, desc: 'foo'},
    {id: 2, desc: 'rabbit'},
    {id: 3, desc: 'cat'},
];

router.get('/', function (req, res) {
    res.render('index', {
        title: 'To Do',
        items: todoItems
    });
});

router.post('/add', function (req, res) {
    var newItem = req.body.newItem;
    console.log(newItem);
    todoItems.push({
        id: todoItems.length + 1,
        desc: newItem
    });
    res.redirect('/');
});


router.get('/users/:id', function (req, res) {
    console.log(req.params.id);
    res.send(req.params.id);
});

router.get(/^\/users\/history\/(\d{4})$/, function (req, res) {
    console.log(req.params);
    res.send(req.params[0]);
});

router.get('/products/:sku', function (req, res) {
    res.send(req.params.sku);

});

module.exports = router;