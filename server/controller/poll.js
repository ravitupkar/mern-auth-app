var jwt = require('jsonwebtoken');
const db = require('../model/index');


exports.showPolls = async (req, res, next) => {
    try{
        const polls = await db.Poll.find();
        res.status(200).json(polls);
        
    }catch(err){
        err .message = new Error('Polls not Found');
        next(err);
    }

}

exports.getPoll = async (req, res, next) => {
    try{
        const polls = await db.Poll.find()
        res.status(200).json(polls);
        
    }catch(err){
        err .message = new Error('Polls not Found');
        next(err);
    }

}

exports.getPolls = async (req, res, next) => {
    try{
        const polls = await db.Poll.find();
        res.status(200).json(polls);
        
    }catch(err){
        err .message = new Error('Polls not Found');
        next(err);
    }

}

exports.createPoll = async (req, res, next) => {
    try{
        const {_id } = req.decoded;
        const user = await db.User.findById(_id);
        const { question, options } = req.body;
        const poll = await db.Poll.create({
            user,
            question,
            options : options.map(option => ({
                option,
                votes : 0
            }))
        });
        user.polls.push(poll._id);
        await  user.save();
        res.status(201).json(poll);

    }catch(err){
        next(err);
    }

}