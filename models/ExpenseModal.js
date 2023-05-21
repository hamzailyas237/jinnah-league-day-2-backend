const { mongoose } = require("mongoose");

const expenseSchema = mongoose.Schema({
    finance: [{
        user_id: String,
        amount: String,
        category: String,
        description: String,
    }],
})


const expenseModel = mongoose.model('finance', expenseSchema)
module.exports = expenseModel