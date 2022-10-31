const express = require("express")
const router = express.Router()
const path = require("path");
const IndexController = require("../controllers/index.controller")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { indexValidator } = require("../middlewares/validators/index.validations")
const { writeToJsonFile } = require("../helpers/methods");
const { FaceModel } = require("../models/face");


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));

});

router.post('/uploadFace', async (req, res) => {
    const { id } = req.body

    // await writeToJsonFile(jsonObj, path.join(__dirname, '../data/people.json'));
    const recognizedPerson = await FaceModel.findOne({id});
    if (!recognizedPerson) {
        await FaceModel.create(req.body);
        res.status(200).send({ sucess: true });
    } else {
        res.status(400).send({ success: false });
    }
})

router.post("/", validate(indexValidator), IndexController.indexPost)

module.exports = router
