const mongoose = require('mongoose')

//create the connection 
const connect = () => {
   return mongoose.connect('mongodb://localhost:27017/whatever')
}

//create the Schema
const student = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    faveFood: [{type: String}],  //array of foods
    info: {
        school: {
            type: String
        },
        shoeSize: {
            type: Number
        }
    }
})

//create the collection
const Student = mongoose.model('student', student)

connect()
    .then(async connection =>{
        const student = await Student.create({firstName: 'Kermit'})
        console.log(student)
    })
    .catch(e => console.error(e))