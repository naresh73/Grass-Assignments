const mongoose = require('mongoose');

const SportSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    player: {
        type: Number,
        default:1,
        validate(numOfplayer) {
            if (numOfplayer < 1) throw new console.error('Number of player atleast 1');
        },
    },
});

const Sports = mongoose.model('Sports', SportSchema);

module.exports = Sports;