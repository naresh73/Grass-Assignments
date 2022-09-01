const FoodModel = require('../models/food/food.model');

async function foodGet(request, response) {
    const CollectionOfFoods = await FoodModel.find({});
    try {
        response.send(CollectionOfFoods);
    } catch (error) {
        response.send({message:error.message});
    }
}

async function foodPost(request, response) {
    if(!request.body.Food_Name && !request.body.calories){
        response.send({message: "cotents can not be empty"});
    }

    const NewFood = new FoodModel(request.body);
    try {
        await NewFood.save();
        response.send({
            message: "Food Added successfully",
            food_description: NewFood
        });
    } catch (error) {
        response.send({message:error.message});
    }
}

async function foodPut(request, response) {
    try {
        await FoodModel.findByIdAndUpdate(request.params.id, request.body);
        response.send("Food data updated successfully->>>>>>>>>>>>>>>>>>")
    } catch (error) {
        response.send({message:error.message});
    }
}

async function foodDelete(request, response) {
    try {
        await FoodModel.findByIdAndDelete(request.params.id);
        response.send("Food data deleted successfully->>>>>>>>>>>>>>>>>>")
    } catch (error) {
        response.send({message:error.message});
    }
}

module.exports = { foodGet, foodPost, foodPut, foodDelete} ;