var jwt = require('jsonwebtoken');
const db = require('../model/index');


exports.register = async (req, res, next) => {
    try{
        const user = await db.User.findOne({username : req.body.username});

        if (user) {
            res.json({message : 'Username Already Available'});
        } else {
            const user = await db.User.create(req.body);
    
            const {_id, username, password } = user;
            var token = jwt.sign({ _id, username}, process.env.SECRET);
    
            res.status(201).json({_id, username, token});
        }
        
       

    }catch(err){
        next(err);
    }

}

exports.login = async (req, res, next) => {
    try{
        const user = await db.User.findOne({username : req.body.username});
        const {_id, username, password } = user;
        const valid = await user.comaparePassword(req.body.password);
        if (valid) {
            var token = jwt.sign({ _id, username}, process.env.SECRET);
            res.status(200).json({_id, username, token});
        } else {
            throw new Error('Invalid Usaename/Password');
        }
    }catch(err){
        err .message = new Error('Invalid Usaename/Password');
        next(err);
    }

}