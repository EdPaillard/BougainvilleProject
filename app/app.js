const express = require('express');
const mongoose = require('mongoose');
const app = express();
const htmlRouter = require('./router/htmlRouter');
const usersRouter = require('./router/usersRouter');

//Connexion Database
mongoose.connect('mongodb+srv://THOSEINFOS:AREFAKE@HIDE.zsiio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Gestion du format url-encoded
app.use(
  express.urlencoded({
    extended: true,
  })
);
//Gestion du format JSON
app.use(express.json());

app.use(htmlRouter);
app.use(usersRouter);



module.exports = app;
