const express = require("express")
const router = express.Router()
const linkControllers = require("../controllers/linkControllers")

router.get("/", (req, res) => {
    res.send("Link added !!!")
})

module.exports = router