import express from "express";
import userRoute from "../backend/routes/users.js";
import authRoute from "../backend/routes/auth.js";
import blogRoute from "../backend/routes/blogposts.js"
import cors from 'cors';
import createTable from './createTables.js'


const app = express();

app.use(cors())

app.use(express.json());
createTable();

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/blog", blogRoute)



app.listen(8000, () => {
    console.log("Server running on port 8000")
})