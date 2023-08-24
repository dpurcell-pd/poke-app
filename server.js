const express = require('express');
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon.js');

app.set("views", `${__dirname}/views`);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>")
});

app.get('/pokemon', (req, res) => {
    res.render("Index", {
        pokemon: pokemon
    });
});

app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

app.post('/pokemon', (req, res) => {
    console.log(req.body);   
    pokemon.push(req.body);   
    res.redirect("/pokemon");
});

app.get("/pokemon/:id", (req, res) => {
    res.render("Show", {
        pokemon: pokemon[req.params.id]
    });    
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}.`);   
});
