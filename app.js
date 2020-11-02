const express = require('express');

const app = express();
const port = process.env.SERVER_PORT || 3000;

const cors_proxy = require('cors-anywhere');

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