const express = require('express');
const router = express.Router();
const GameContoller = require("../contoller/game.contoller");

router.post('/create', GameContoller.createGame);
router.get('/', GameContoller.createGameGet);
router.put('/:id', GameContoller.createGamePut);
router.delete('/:id', GameContoller.createGameDelete);
module.exports = router;