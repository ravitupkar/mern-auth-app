const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({

    options  :  String,
    voted : {type : Number, default: 0}
});


const pollSchema = new mongoose.Schema({
    question  :  String,
    options : [{}],
    voted : [{type : mongoose.Schema.Types.ObjectId, ref: 'Users'}],
    createdAt : {
        type : Date,
        default : Date.now
    }
});

module.exports  = mongoose.model('Poll', pollSchema);