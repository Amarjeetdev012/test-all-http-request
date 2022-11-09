const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.get("/", userController.getData)
router.get("/:id", userController.getDataById)
router.post("/", userController.postdata)
router.put("/:id", userController.updateData)
router.delete("/:id", userController.deleteData)
router.patch("/:id", userController.updatePatchData)


module.exports = router