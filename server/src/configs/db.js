const mongoose = require("mongoose") ;

module.exports = () => {
    return mongoose.connect("mongodb+srv://clone123:clone123@cluster0.xdiz7.mongodb.net/?retryWrites=true&w=majority")
}