const express = require("express")
const router = express.Router()
const linkControllers = require("../controllers/linkControllers")

router.get("/", linkControllers.get_links)
router.post("/", linkControllers.post_links)
router.delete("/:id", linkControllers.delete_link)
router.put("/:id", linkControllers.update_link)

module.exports = router