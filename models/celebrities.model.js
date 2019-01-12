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

model.exports = mongoose.model("Celebrities", schema); // es posible que haya que poner Celebrity