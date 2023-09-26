//require express
const express = require('express')
const { test, addContact, getContacts, getContactBiId, deleteContact, editContact } = require('../controllers/contact')

//require router
const router = express.Router()

//test router
router.get('/test',test)

//add contact route
router.post('/add_contact',addContact)

//get all contacts route
router.get('/get_contacts',getContacts)

//get contact by id
router.get ('/get_contact_By_Id/:_id',getContactBiId)

//delete contact by id
router.delete ('/delete_contact/:_id',deleteContact)

//edit contact
router.put ('/edit_contact/:_id',editContact)

//export router
module.exports = router