const express = require('express');
const app = express();
const path = require('path');
const fs= require('fs');
const { log } = require('console');

app.use(express.json());
app.use(express.urlencoded({extend: true}));
app.use(express.static(path.join(__dirname, 'public')));  
app.set('view engine','ejs');

app.get("/",function(req,res){ 
    res.render('index.ejs')
    
});
app.get("/about",function(req,res){ 
    res.render('about.ejs')
    
});



app.listen(4000); 