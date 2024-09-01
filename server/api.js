const express = require("express");

const home = require("./API/home");
const chat = require("./API/chat");
const about = require("./API/about");
const career = require("./API/career");
const contact = require("./API/contact");
const router = express.Router();



router.route('/homepage').get(home);
router.route('/chatpage').get(chat);
router.route('/about').get(about);
router.route('/career').get(career);
router.route('/contact').get(contact);



module.exports = router