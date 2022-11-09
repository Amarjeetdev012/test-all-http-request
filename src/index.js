const express = require("express")
const route = require("./routes/route")
const app = express()
const mongoose = require("mongoose")

app.use(express.json())

app.use("/", route)

mongoose.connect("mongodb+srv://amarjeet:1HgbEG76PJztaeDA@cluster0.sghuvhq.mongodb.net/test", {
    useNewUrlParser:true
})
.then( () => {console.log("mongodb is connected succesfully")})
.catch( (error) => {
    console.log(error)
})

const PORT = process.env.PORT || 3000
app.listen( PORT, () => {
    console.log(`express is running on ${PORT}`)
})