const mongoose = require("mongoose");
require("dotenv").config()

const dbConnector = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.n10ox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        .then(res => console.log("Connection established"))
        .catch(err => {
            console.log(err)
        })
}


module.exports = { dbConnector };