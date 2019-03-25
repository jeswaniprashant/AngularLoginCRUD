const mongoose = require('mongoose');

let accountSchema = mongoose.Schema({
    accNumber: Number,
    type: String
});

let accData = mongoose.model('Account', accountSchema);

module.exports = accData;