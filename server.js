const express = require('express');
const app = express();

// sets the view engine to EJS
app.set('view engine', 'ejs');

// directs Express to the public folder for stylesheets
app.use(express.static("public"));

// app.use(logger)

// controller actions
app.get('/', (req, res) => {
   res.render('home')
})

app.get('/users', (req, res) => {
   res.send('Users Page')
})

// function logger(req, res, next) {
//    console.log('Log')
//    next()
// }

app.listen(3000, () => console.log('Server Started'))