const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register.js');
const signin = require('./controllers/signin.js');
const profile = require('./controllers/profile.js');
const image = require('./controllers/image.js');

const db = knex({
  	client: 'pg',
  	connection: {
	    host : '127.0.0.1',
	    user : 'postgres',
	    password : 'C1000Plein',
	    database : 'smart-brain'
  }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=> {res.send(database.users) })
app.post('/Signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })
app.post('/Register', (req, res) => { register.handleRegister(req, res, db, bcrypt) }) 
app.get('/Profile/:id', (req, res) => { profile.handleProfile(req, res, db) })
app.put("/Image", (req, res) => { image.handleImage(req, res, db) })
app.post("/Imageurl", (req, res) => { image.handleApiCall(req, res) })


app.listen(3000, () => {
	console.log('app is running on port 3000');
})

