import db from '../db.js';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from "jsonwebtoken";



export async function register(req, res) {

    //kolla om användare finns
    const query = "SELECT * FROM users WHERE username = $1::TEXT OR email = $2::TEXT";
    const values = [req.body.username, req.body.email]
    // WHERE email = $1::TEXT OR username = $2::TEXT


    let alreadyUser = await db.query(query, values);

    if (alreadyUser.rows.length) {
        return res.status(500).json("Användaren finns redan")
    }

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User(req.body.username, req.body.email, hash)

    const addUserQuery = "INSERT INTO users (username, email, password) VALUES ($1::TEXT, $2::TEXT, $3::TEXT)";

    let response = await db.query(addUserQuery, [newUser.username, newUser.email, newUser.password]);

    res.json(newUser)


}
//om ja avbryt



//om nej lägg till



//fångar fel, loggar in sätter jwt i localstorage. 
export function login(req, res) {


    console.log(req.body, " this shoudl be username nad password")

    const q = "SELECT * FROM users WHERE username = $1::TEXT";

    db.query(q, [req.body.username], (err, data) => {
        if (err) res.status(500).json(err);

        if (data.rows.length < 1) {
            return res.status(404).json("User not found!");
        }


        //Check password

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data.rows[0].password
        );

        if (!isPasswordCorrect)
            return res.status(400).json("Wrong username or password!");

        const token = jwt.sign({ id: data.rows[0].id }, "SikretKej");

        const { password, ...other } = data.rows[0];


        return res
            .status(200)
            .json({ token: token, user: other });
    })

}




// export function authenticateToken(req, res, next) {

//     console.log("<------------------------")
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]

//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token, "Sapppersecret", (err, user) => {
//         if (err) return res.sendStatus(403)
//         req.user = user;

//         next();
//     })
// }

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id }, "mySecretKey", {
        expiresIn: "2h",
    });
};

export async function verifyToken(token) {
    let resToken = jwt.verify(token, "testSecret")
    console.log(resToken, " this is re stoke")
    return resToken

}


export const logout = (req, res) => {
    res.clearCookie("accessToken").status(200).json("fuck offf asshole!")
}