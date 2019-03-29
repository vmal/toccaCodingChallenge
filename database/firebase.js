const admin = require("firebase-admin");
const serviceAccount = require('../ServiceAccountKey.json');

module.exports = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});