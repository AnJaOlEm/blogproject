import db from "../db.js";
import Blog from '../models/Blog.js'


//Create blogpos,
//delete blogpost,
//edit blogpost,



export async function createPost(req, res) {
    let content = req.body.content;

    //let blog = new Blog(content);

    console.log(req.body)

    const query =
        'INSERT INTO blog (title, ingress, content, user_id) VALUES ($1::TEXT, $2::TEXT, $3::TEXT, $4::INT)';


    const values = [
        req.body.title,
        req.body.ingress,
        req.body.content,
        req.body.user_id
    ];
    let result = await db.query(query, values);

    res.json("blog");

}

export async function deletePost(request, response) {
    let id = parseInt(request.params.id);

    const query =
        'DELETE FROM blog WHERE blog_id = $1::INT';
    const values = [id];
    let res = await db.query(query, values);

    response.json({ success: true, deleteCout: res.rowCount });

}

async function updatePost(request, response) {
    const query =
        'UPDATE blog SET title, tag, ingress, content WHERE user_id = $1::INT'

}


async function getUserPosts(request, response) {
    const query =
        'SELECT * FROM users, blog WHERE users.email=blog.ingress;';

}

export async function getAllPosts(req, res) {
    const query = "SELECT * FROM blog;"

    db.query(query, (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });



}
export async function getPost(req, res) {

    const query = "SELECT * FROM blog WHERE blog_id = $1::INT"
    let values = parseInt(req.params.id)

    console.log(values)


    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data.rows[0]);
    });

}



// pool.connect((err) => {
//     if (err) console.log(err);
//     else {
//         user(pool);
//         post(pool);
//         join(pool);
//         getBlogs(pool);
//         // get(pool);
//     }
// });

// GRANT SELECT ON blog TO PUBLIC;
// GRANT SELECT, UPDATE, INSERT, DELETE ON blog TO id = $1::INT;