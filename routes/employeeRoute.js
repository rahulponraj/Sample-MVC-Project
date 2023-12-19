const express = require("express");
const employeeRoute = express();

const bodyParser = require("body-parser");
employeeRoute.use(bodyParser.json());
employeeRoute.use(bodyParser.urlencoded({extended:true}));

employeeRoute.set('view engine','pug');
employeeRoute.set('views','./views');

const employeeController = require("../controllers/employeeController");

employeeRoute.get('/register',function(req,res){
    res.render('register');
})
employeeRoute.post('/register',employeeController.insertEmployee);

module.exports = employeeRoute;