const { Router } = require("express");
const authControllers = require("../controllers/authControllers");
const router = Router();

router.post("/register", authControllers.register_post);
router.post("/login", authControllers.login_post);
router.get("/logout",authControllers.logout_get);
module.exports=router;

