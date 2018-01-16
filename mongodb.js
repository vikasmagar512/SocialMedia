var mongoose = require('mongoose')
var carSchema = mongoose.Schema({
    type:String,
    year:Number
})

var Car = mongoose.model('Car',carSchema)

mongoose.connect('localhost:27017/example')

var newCar = new Car({'type':'vikas',year:2018})
newCar.save(function(err,result){
    console.log('here result is ',result)
})