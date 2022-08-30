const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    Food_Name : {
        type: String,
        required: true
    },
    Description : {
        type: String,
        validate(des) {
            if(des.length < 25) throw new Error("Small description can no be acceptable");
        }
    },
    calories : {
        type: Number,
        required: true
    },
    quantity_in_gram : {
        type: Number,
        default: 100,
        validate(gram) {
            if(gram < 100) throw new Error("You have to mention minimum 100g quantity of this food");
        }
    }
});

const FoodModel = mongoose.model("FoodModel", FoodSchema);

module.exports = FoodModel;