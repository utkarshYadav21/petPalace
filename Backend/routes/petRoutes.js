const { Router } = require("express");
const petControllers = require("../controllers/petControllers");
const verifyToken = require("../middleware/verifyToken");
const router = Router();

router.post("/giveaway",verifyToken,petControllers.giveaway_post);
router.get("/search/:key",petControllers.search_get);
router.get("/adopt",petControllers.adopt_get);
router.get("/adopt/:id",verifyToken,petControllers.adopt_single_get);
router.post("/adopt/:id",verifyToken,petControllers.adopt_post);

module.exports=router;
