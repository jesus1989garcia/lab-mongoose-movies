const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    catchPhrase: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}); 

module.exports = mongoose.model("Celebrities", schema); 