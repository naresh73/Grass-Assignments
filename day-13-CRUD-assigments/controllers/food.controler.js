const FoodModel = require('../models/food/food.model');

async function foodGet(request, result) {
    const CollectionOfFoods = await FoodModel.find({});
    try {
        result.send(CollectionOfFoods);
    } catch (error) {
        result.send({message:error.message});
    }
}

async function foodPost(request, result) {
    if(!request.body.Food_Name && !request.body.calories){
        result.send({message: "cotents can not be empty"});
    }

    const NewFood = new FoodModel(request.body);
    try {
        await NewFood.save();
        result.send({
            message: "Food Added successfully",
            food_description: NewFood
        });
    } catch (error) {
        result.send({message:error.message});
    }
}

async function foodPut(request, result) {
    try {
        await FoodModel.findByIdAndUpdate(request.params.id, request.body);
        result.send("Food data updated successfully->>>>>>>>>>>>>>>>>>")
    } catch (error) {
        result.send({message:error.message});
    }
}

async function foodDelete(request, result) {
    try {
        await FoodModel.findByIdAndDelete(request.params.id);
        result.send("Food data deleted successfully->>>>>>>>>>>>>>>>>>")
    } catch (error) {
        result.send({message:error.message});
    }
}

module.exports = { foodGet, foodPost, foodPut, foodDelete} ;