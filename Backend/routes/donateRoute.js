const { Router } = require("express");
const donateController = require("../controllers/donateController");
const verifyToken = require("../middleware/verifyToken");
const router = Router();

router.post("/donation", verifyToken,donateController.donate_post);

module.exports=router
