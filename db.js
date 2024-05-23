const mongoose = require('mongoose')
require('dotenv').config();

const mongoDBURL = "mongodb://localhost:27017/codeEditorDatabase"

mongoose.connect(mongoDBURL)

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("connected to mongoDB database")
})

module.exports = db