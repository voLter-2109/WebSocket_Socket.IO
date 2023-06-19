const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
res.send("это мой мир")
})

module.exports = router;