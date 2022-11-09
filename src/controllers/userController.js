const userModel = require("../models/userModel")


// Requiring ObjectId from mongoose npm package
const ObjectId = require('mongoose').Types.ObjectId;

// Validator function for mongodb objectid 
function isValidObjectId(id) {
    if (ObjectId.isValid(id)) {
        return true;
    }
}


const getDataById = async (req, res) => {
    try {
        let userId = req.params.id

        if (!isValidObjectId(userId)) {
            return res.status(400).send({ status: false, message: "please provide valid object id" })
        }

        let allData = await userModel.findById(userId)
        console.log(allData)
        return res.status(200).send({ status: true, message: "data get succesfully", data: allData })
    }

    catch (error) {

        res.status(500).send({ message: `${error.message}`, error: error })
    }
}

const getData = async (req, res) => {
    try {
        let allData = await userModel.find()

        res.status(200).send({ status: true, message: "data get succesfully", data: allData })
    }
    catch (error) {
      res.status(500).send({ message: `${error.message}`, error: error })
    }
}


const postdata = async (req, res) => {
    try {
        let data = req.body
        let createData = await userModel.create(data)
        res.status(201).send({ status: true, msg: "data created", data: createData })

    } catch (error) {
      res.status(500).send({ message: `${error.message}`, error: error })

    }
}

const updateData = async (req, res) => {
    try {
        let userId = req.params.id
        let data = req.body
        let userData = await userModel.findByIdAndUpdate({ _id: userId }, data, { new: true })

        res.status(200).send({status:true,message:"data updated using put succesfully", data: userData })
    } catch (error) {
        res.status(500).send({ message: `${error.message}`, error: error })
}
}


const deleteData = async (req, res) => {
    try {
        let userId = req.params.id
        let userData = await userModel.findOneAndDelete({ _id: userId })
        console.log(userData)
        res.status(200).send({status:true,message:"data deleted succesfully"})
    } catch (error) {
        res.status(500).send({ message: `${error.message}`, error: error })
    }
}


const updatePatchData = async (req, res) => {
    try {
        let userId = req.params.id
        let data = req.body
        console.log(userId)

        let userData = await userModel.findByIdAndUpdate({ _id: userId }, data, { new: true })
        res.status(200).send({status:true,message:"data updated partially using patch succesfully",data: userData })
    } catch (error) {
        res.status(500).send({ message: `${error.message}`, error: error })
    }
}


module.exports.getData = getData
module.exports.postdata = postdata
module.exports.updateData = updateData
module.exports.deleteData = deleteData
module.exports.updatePatchData = updatePatchData
module.exports.getDataById = getDataById