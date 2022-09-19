const router = require('express').Router()
const { catchErrors } = require("../handlers/errorHandler");

// MIDDLEWARE ====================================================================================================
const auth = require('../middleware/auth-session.middleware')

// CONTOLLERS ====================================================================================================
const mainControllers  = require('../controllers/main.controller')

router.get("/test", auth, (mainControllers.test));

module.exports = router