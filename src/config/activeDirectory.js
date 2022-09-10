const ActiveDirectory = require('activedirectory');
require('dotenv').config();

const config = {
    url: process.env.AD_URL,
    baseDN: process.env.DOMAIN_CONTROLLER,
    username: process.env.AD_USERNAME,
    password: process.env.AD_PASSWORD,
}

const ad = new ActiveDirectory(config)
// console.log(ad)

module.exports = ad;
