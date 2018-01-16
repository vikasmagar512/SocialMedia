const events = require('events')
const utils = require("util");
const mongoose = require('mongoose')
const eventEmitter = events.EventEmitter
const ee = new eventEmitter();
ee.on('speak',function () {
    console.log('speak event')
})
ee.emit('speak')

//inheriting the eventEmitter class
var Car = function () {
    eventEmitter.call(this)
    this.hitGasPedal = function () {
        console.log('here hit Gas Pedal')
        this.emit('accelerate')
    }
}
utils.inherits(Car,eventEmitter)
const c = new Car();
c.on('accelerate',function () {
    console.log('accelerate')
})
c.hitGasPedal()

var schema = mongoose.Schema({
    type:String,
    year:Number
})
var Car = mongoose.model('cars',schema)

mongoose.connect('mongod://localhost:27017/example')
var newCar = new Car()