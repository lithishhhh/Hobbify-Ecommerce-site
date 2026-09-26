const admin = require("firebase-admin");
require('dotenv').config();

const firebaseConfig = require("../cred/serviceKey.json")

console.log("Firebase connected...")
admin.initializeApp(
    {
        credential : admin.credential.cert(firebaseConfig)
    }
);