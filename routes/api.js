const express = require("express")
const router = express.Router()

const IndexController = require("../controllers/index.controller")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { indexValidator } = require("../middlewares/validators/index.validations")
const path = require('path');


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));

})
router.post("/", validate(indexValidator), IndexController.indexPost)

module.exports = router
