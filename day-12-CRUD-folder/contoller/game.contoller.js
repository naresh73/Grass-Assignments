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
 
exports.createGamePut = async function (req,res) {
    console.log(req.params);
    try {
      await GameModel.findByIdAndUpdate(req.params.id, req.body);
      res.send("Data updated->>>>>>>>>>>>>>>");
    } catch (error) {
      res.send(error.message);
    }
    res.send("OK")
  };


exports.createGameDelete = async function (req, res) {
    console.log(req.params);
    try {
        await GameModel.findByIdAndDelete(req.params.id);
        res.send("Data deleted successfully->>>>>>>>>>>>>>>>");
    } catch (error) {
        res.send(error);
    }
}  
