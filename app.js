const express = require('express');
const cors = require('cors'); 

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors());

app.options('*', cors()); 

// app.use((request, response, next) => {
//    response.header("Access-Control-Allow-Origin", "*"); 
//    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next(); 
// })

// sets the view engine to EJS
app.set('view engine', 'ejs');

// serve static files
app.use(express.static("public"));

// controller actions
app.get('/', (req, res) => {
   res.render('home')
})

app.get('/plants', (req, res) => {
   res.render('plants')
})

app.get('/plants/:plantName', (req, res) => {
   console.log(req.params)
   res.send(req.params)
   res.render('plant-page')
})

app.get('/log', (req, res) => {
   res.render('log')
})

app.listen(port, () => console.log(`Listening on port ${port}`));