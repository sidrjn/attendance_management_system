let mongoose = require('mongoose');
let attRecordSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    roll:{
        type:String,
        required: true
    },
    status:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    teacher:{
        type:String,
        required: true
    }
});

let Record = module.exports = mongoose.model('Record', attRecordSchema);