const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

// Load Express
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));    // Set location of views folder
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('index', { 
        title:'ABC Bank',
        header: 'This is a Test'
    });
})

app.get('/plan-retirement', (req,res)=>{
    res.render('retirement', { 
        title:'Plan Retirement',
        header: 'This is a Test'
    });
})

app.get('/save-budget', (req,res)=>{
    res.render('budget', { 
        title:'Budget',
        header: 'This is a Test'
    });
})

app.get('/chat', (req,res)=>{
    res.render('chat', {
        title: 'Hello!'
    })
})

app.get('*', (req,res)=>{
    
    res.redirect('/');

})

app.listen(port, ()=>console.log(`Nodejs is running on ${port}`))