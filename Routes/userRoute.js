require('../db/db')
const express = require("express")
const router = express.Router()
const admin = require('../Controllers/adminCtrl')
const user = require('../Controllers/userCtrl')
const main = require('../Controllers/mainCtrl')


router.get('/main/confirm/thankyou', user.thankyouGET)

router.get('/main/confirm', user.confirmGET)

router.get('/main', user.mainGET)

router.put('/')

router.delete('/')

module.exports = router;