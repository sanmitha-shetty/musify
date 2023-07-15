var admin = require("firebase-admin");

var serviceAccount = {
  "type": "service_account",
  "project_id": "project-musify-93ba0",
  "private_key_id": "aff5cbb218cb81ced4edd271bd65d0297572ed82",
  "private_key": process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_email": "firebase-adminsdk-iucd4@project-musify-93ba0.iam.gserviceaccount.com",
  "client_id": "116842527418726721135",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-iucd4%40project-musify-93ba0.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
module.exports = admin;
