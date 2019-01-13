const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    production: {
        type: String,
        required: true
    },
    celebrity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Celebrity'
      }
}, {
    timestamps: true
}); 

module.exports = mongoose.model("Movie", schema);