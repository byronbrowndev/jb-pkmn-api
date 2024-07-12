// setup express
// require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const keys = require('./keys');


// Sets up the Express App
const app = express();

app.use(cors()); // enable cors from localhost

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 3003;


// get route
// -- route is *
// -- extract params
// -- make call to pokeapi with params
// -- send back response


app.get('/', function(req, res) {
    res.send('<h1>welcome to the julius pkmn bridge!</h1>');
});

app.get('*', async function(req, res) {
    // https://pokeapi.co/api/v2/pokemon/9
    try {
        const params = req.params[0];
        const path = req.path;
        // const url = 'https://pokeapi.co/api/v2' + params;
        // console.log('-------' + url + '--------');
        // const pkmnResp = await fetch(url);
        console.log(pkmnResp);

        res.json(path);
    } catch {
        console.error('bad thing happened')
        res.status('500').send('err try again in 10 secs');
    }
});
  
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});