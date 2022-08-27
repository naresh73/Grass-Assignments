const express = require('express');
const router = express.Router();
const GameContoller = require("../contoller/game.contoller");

router.post('/create', GameContoller.createGame);
router.get('/create', GameContoller.createGameGet);
module.exports = router;