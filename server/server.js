// initialization
const express = require("express")
const app = express()

// imports
// require("dotenv").config()
const morgan = require("morgan")
const cors = require("cors")

// local imports
const authRoutes = require("./routes/authRoutes")
const linkRoutes = require("./routes/linkRoutes")

// starting the app
const port = 3000
app.listen(port, () => {
    console.log("Server started on port 3000 !!!");
    console.log("Hope you dont get bugs !!!");
})

// middleware 
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

// requests
app.use("/auth", authRoutes)
app.use("/links", linkRoutes)

// 404 requests
app.use((req, res) => {
    res.send({"Error": "Invalid request"}).status(404)
})

