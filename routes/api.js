const express = require("express")
const router = express.Router()
const path = require("path");
const IndexController = require("../controllers/index.controller")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { indexValidator } = require("../middlewares/validators/index.validations")
const { writeToJsonFile } = require("../helpers/methods")


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));

});

router.post('/uploadFace', async (req, res) => {
    const jsonObj = JSON.stringify(req.body);

    await writeToJsonFile(jsonObj, path.join(__dirname, '../data/people.json'));

    res.status(200).send({ status: "successResponse" });

})

router.post("/", validate(indexValidator), IndexController.indexPost)

module.exports = router
