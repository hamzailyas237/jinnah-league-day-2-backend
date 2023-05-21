const expenseModel = require("../models/ExpenseModal")

const financeControllers = {
    finance: (req, res) => {
        expenseModel.create({ ...req.body }).then(data => {
            res.status(200).json({
                message: 'Finance Added Successfully',
                finance: data.finance
            })
        }).catch(err => {
            res.status(500).json({
                message: 'Internal server error',
            })
        })
    },

    getAllFinance: (req, res) => {
        expenseModel.find({}).then(data => {
            res.status(200).json({
                message: 'Get all finance',
                data
            })
        }).catch(err => {
            res.status(500).json({
                message: 'Internal server error',
            })
        })
    },

    updatefinance: (req, res) => {
        // const { _id } = req.body
        // // const _id = new ObjectId(id);
        // console.log(req.body);
        // const finance = {
        //     user_id: req.body.user_id,
        //     amount: req.body.review,
        //     category: req.body.category,
        //     description: req.body.description,
        // }
        // expenseModel.update({ _id },
        //     { $push: { finance } })
        //     .then(finance => {
        //         res.status(200).json({
        //             message: 'Finance Updated',
        //             finance
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         res.status(500).json({
        //             message: 'Something went wrong in updating finance'
        //         })
        //     })
    },

}
module.exports = financeControllers