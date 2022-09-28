import express from "express";
import userRoute from "../backend/routes/users.js";
import authRoute from "../backend/routes/auth.js";

const app = express()

app.use(express.json())

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)


app.listen(8000, () => {
    console.log("Server running on port 8000")
})