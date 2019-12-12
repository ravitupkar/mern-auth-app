var jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    // console.log(req.headers['authorization']);
    if (req.headers['authorization']) {
        const token = req.headers['authorization'].split(' ')[1];
        jwt.verify(token, process.env.SECRET, (err, decoded)=>{
            if(err){
                next(Error('Failed to athunticate'));
            }else{
                req.decoded = decoded;
                console.log(decoded);
                next();
            }
        });
    }else{
        next(Error('No token Provided'));
    }

}