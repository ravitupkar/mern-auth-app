const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODBURI, {
   useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)


module.exports.User = require('./users');
module.exports.Poll = require('./poll');