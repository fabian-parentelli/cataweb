import dotEnv from 'dotenv';

dotEnv.config();

export default {
    port: process.env.PORT,
    privateKeyPassport: process.env.PRIVATEKEYPASSPORT,
    cloudName: process.env.CLOUDNAME,
    apiKey: process.env.APIKEY,
    apiSecret: process.env.APISECRET,
    mongoDB: process.env.MONGODB,
    userNodemailer: process.env.USERNODEMAILER,
    passNodemailer: process.env.PASSNODEMAILER,
    privateKey: process.env.PRIVATEKEY,
    backUrl: process.env.BACKURL,
    forntUrl: process.env.FRONTURL,
};