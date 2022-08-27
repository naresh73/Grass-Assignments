const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    Game_Name : {
        type: String,
        required: true,
    },
    No_Of_Players : {
        type: Number,
        default : 2,
        validate(PlayerValue) {
            if (PlayerValue < 2) throw new Error("At least two players must be specified");
        }
    },
    Name_of_Players : {
        type : Array
    },
    equipments : {
        type : Array
    }
});

const GameModel = mongoose.model("GameModel", GameSchema);

module.exports = GameModel;
