const mongoose = require('mongoose');

const SportsSchema = new mongoose.Schema({
    Sport_Name : {
        type: String,
        required: true
    },
    No_of_Players : {
        type: Number,
        required: true,
        validate(players) {
            if(players < 2) throw new Error("You must enter at least 2 number of player");
        }
    },
    Equipments : {
        type: Array
    }
})

const SportsModel = mongoose.model("SportsModel", SportsSchema);

module.exports = SportsModel;