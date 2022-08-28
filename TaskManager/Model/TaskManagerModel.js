const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI||"mongodb+srv://salilpatel:Salil9437@cluster0.kjmph2x.mongodb.net/?retryWrites=true&w=majority")
    .then((res) => console.log('Connected to database'))
    .catch((err) => console.log('Error in connection'));

const taskManagerModel = mongoose.model('taskmanager',{
    taskid: Number,
    taskname: String,
    completionstatus: Boolean
})
module.exports = taskManagerModel