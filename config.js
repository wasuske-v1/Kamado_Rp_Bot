const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "4ZYygCZD#jcJhe6SZCURnf3I1nWqFOuFeZQy9eXds7GBKYbltKeo", 
MONGODB: process.env.MONGODB || "mongodb+srv://raizen:darki123@cluster0.utsln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", //ne pas changer
};
