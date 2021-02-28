const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: String,
    area: String,
    description: String,
    explanation: String,
    precautions: String,
    reps: Number,
    sets: Number,
    images: { img1: Buffer, img2: Buffer, img3: Buffer },
});

module.exports = mongoose.model('Exercise', exerciseSchema);