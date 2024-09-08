const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PUT SESSION ID HERE!",
MONGODB: process.env.MONGODB || "mongodb+srv://dbUser:bXptn6Z!GD*5D37@cluster0.wserelz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", //ne pas changer
};
