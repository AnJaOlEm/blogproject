const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const db = require('./db')
const User = require('./user')

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cors());


async function createTable() {

    console.log("<----")
    let table = `
    CREATE TABLE IF NOT EXISTS "users" (
	    "id" SERIAL,
	    "username" VARCHAR(100) NOT NULL,
        "email" VARCHAR(100) NOT NULL,
        "password" VARCHAR(100) NOT NULL,	    
	    PRIMARY KEY ("id")
    );`;

    let res = await db.pool.query(table)
    addUser();
}

async function createDb() {

    console.log("We in?")
    const query = 'CREATE DATABASE users';
    let res = await db.pool.query(query)
    // let check = await db.pool.query(queryCheck)

    console.log(" <----")
}

async function getUsers(request, response) {

    console.log("Running")
    const query = "SELECT * FROM users";
    let res = await db.pool.query(query);
    console.log(res.rows)
}

async function registerUser(request, response) {


    let user = new User("aba", "bbagmail.com", "pass");
    console.log("adding user")

    const query = "INSERT INTO users (username, email, password) VALUES ($1::TEXT, $2::TEXT, $3::TEXT)";
    const values = [user.username, user.email, user.password];
    let res = await db.pool.query(query, values);


}


app.listen(8000, () => {
    console.log("server listening on port 8000")
})

app.get('/users', getUsers)
app.get('/', createTable)
