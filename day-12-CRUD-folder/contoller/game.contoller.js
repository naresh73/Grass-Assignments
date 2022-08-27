const GameModel = require("../model/sports.model");

exports.createGame = async function (req,res) {
    if (!req.body.Game_Name && !req.body.equipments) {
        res.send ({message: "conetent can not be empty"});
    }

    const NewGame = new GameModel(req.body);

    try {
        await NewGame.save();
        res.send({
            message : "Game saved successfully",
            game_description: NewGame,
        });
    } catch (error) {
        res.send({message:error.message});
    }
};

exports.createGameGet = async function (req,res) {
    const DataOfGame = await GameModel.find({});
    try {
        res.send(DataOfGame);
    } catch (error) {
        res.send(error);
    }
};
 
 