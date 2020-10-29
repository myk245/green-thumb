const express = require('express');
const cors = require('cors'); 

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors());

// app.use(function (req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//    );
//    next();
// });

// sets the view engine to EJS
app.set('view engine', 'ejs');

// serve static files
app.use(express.static("public"));

// controller actions
app.get('/', (req, res) => {
   res.render('home')
})

app.get('/log', (req, res) => {
   res.render('log')
})

app.listen(port, () => console.log(`Listening on port ${port}`));