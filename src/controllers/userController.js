const userModel = require("../models/userModel")


// Requiring ObjectId from mongoose npm package
const ObjectId = require('mongoose').Types.ObjectId;
 
// Validator function
function isValidObjectId(id){
     
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;       
        return false;
    }
    return false;
}


const getDataById =async (req, res) => {
    try {
        let userId = req.params.id
        
console.log(userId)

if(!isValidObjectId(userId)){
  return res.send("please provide valid object id")
}

console.log(userId)

    let allData = await userModel.findById(userId)

     return res.json(allData)
    } catch (error) {

        res.send(error)
    }
}

const getData =async (req, res) => {
    try {
    let allData = await userModel.find()

    res.send({data:allData})
    } catch (error) {
        res.send(error)
    }
}


const postdata = async (req, res) => {
    try {
        let data = req.body
        let createData = await userModel.create(data)
        res.send({ status: true, msg: "data created", data: createData })

    } catch (error) {
        res.send(error)

    }
}

const updateData = async (req, res) => {
    try {
        let userId = req.params.id
        let data = req.body
        let userData = await userModel.findByIdAndUpdate({ _id: userId }, data, { new: true })

        res.send({ data: userData })
    } catch (error) {
        res.status(500).send(error)
    }
}


const deleteData = async (req, res) => {
    try {
        let userId = req.params.id
        let userData = await userModel.findOneAndDelete({ _id: userId })
        console.log(userData)
        res.send({ msg: "data deleted succesfully" })
    } catch (error) {
        res.status(500).send(error)
    }
}


const updatePatchData = async (req, res) => {
    try {
        let userId = req.params.id
        let data = req.body
        console.log(userId)

        let userData = await userModel.findByIdAndUpdate({ _id: userId }, data, { new: true })
        res.send({ data: userData })
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports.getData = getData
module.exports.postdata = postdata
module.exports.updateData = updateData
module.exports.deleteData = deleteData
module.exports.updatePatchData = updatePatchData
module.exports.getDataById = getDataById