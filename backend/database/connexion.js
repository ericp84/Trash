var mongoose = require('mongoose');

var options ={
    connectTimeoutMS :5000,
    useNewUrlParser :true,
    useUnifiedTopology : true
  };
  mongoose.connect('mongodb+srv://userUno:1234@cluster0.adoao.mongodb.net/geotrash?retryWrites=true&w=majority',
    options,
    function(err){
        if (!err){
            console.log("je suis connecté")
        }else {
            console.log(err)
        }
      
    })

module.exports = mongoose