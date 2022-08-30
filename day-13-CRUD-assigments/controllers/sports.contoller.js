const SportsModel = require('../models/sports/sports.model');

async function sportsGet(request, result) {
    const CollectionOfSports = await SportsModel.find({});

    try {
        result.send(CollectionOfSports);
    } catch (error) {
        result.send({message: error.message});
    }
}

async function sportsPost(request, result) {    
    let NewSport = new SportsModel(request.body);
    try {
        await NewSport.save();
        result.send({
            message: "Sport added successfully",
            sport_description: NewSport
        });

    } catch (error) {
        result.send({message: error.message});
    }
}

async function sportsPut(request, result) {    
    try {
        await SportsModel.findByIdAndUpdate(request.params.id, request.body);
        result.send("Sport's data updated successfully->>>>>>>>>>>>>>>>>>>");

    } catch (error) {
        result.send({message: error.message});
    }
}

async function sportsDelete(request, result) {    
    try {
        await SportsModel.findByIdAndDelete(request.params.id);
        result.send("Sport's data deleted successfully->>>>>>>>>>>>>>>>>>>");

    } catch (error) {
        result.send({message: error.message});
    }
}

module.exports = {sportsGet, sportsPost, sportsPut, sportsDelete } ;
