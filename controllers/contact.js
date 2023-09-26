const contact = require("../models/contact")


exports.test = async (req,res) => {
    try {
        res.send('this is a test')
    } catch (error) {
        console.log(error)
    }
}

// add new contact

exports.addContact = async (req,res) => {
    try {
        const {name,email,phone} = req.body
        const newContact = new contact({name, email, phone})
        await newContact.save()
        res.status(200).send({succes: [{msg: 'contact added successfully !'}],newContact})
    } catch (error) {
        res.status(400).send({msg : 'this is an error',error})
    }
}

//get all contact
exports.getContacts = async (req,res) =>{
    try {
        const contacts = await contact.find()
        res.status(200).send(contacts)
    } catch (error) {
        res.status(400).send({msg : 'cannot get all contacts',error})
    }
}

//get contact by id
exports.getContactBiId = async (req,res) => {
    try {
        const {_id} = req.params
        const contactById = await contact.findById({_id})
        if (!contactById){
            res.status(400).send({msg: 'contact not found',error})
        }else {
            res.status(200).send(contactById)
        }
    } catch (error) {
        res.status(400).send({msg : 'cannot get contact',error})
    }
}

//delete contact
exports.deleteContact = async (req,res) => {
    try {
        const {_id} = req.params
        await contact.findByIdAndDelete({_id})
        res.status(200).send('contact deleted successfully !!!')
    } catch (error) {
        res.status(400).send({msg : 'cannot delete this contact',error})
    }
}

//edit contact
exports.editContact = async  (req,res)=> {
    try {
        const {_id} = req.params
        const newContact = req.body
        await contact.updateOne({_id},{$set: newContact})
        res.status(200).send({msg :'contact updated successfully !!!',newContact})
    } catch (error) {
        res.status(400).send({msg : 'cannot edit this contact',error})
    }
}