const admin = require('firebase-admin');
const { getAuth } = require('firebase-admin/auth');

const requiredFirebaseVariables = [
  'FIREBASE_PROJECT_ID',
  'FIREBASE_CLIENT_EMAIL',
  'FIREBASE_PRIVATE_KEY',
];
const missingFirebaseVariables = requiredFirebaseVariables.filter(
  (name) => !process.env[name]?.trim()
);

if (missingFirebaseVariables.length > 0) {
  throw new Error(
    `Firebase Admin configuration is missing required environment variables: ${missingFirebaseVariables.join(', ')}`
  );
}

const app = admin.getApps().length
  ? admin.getApp()
  : admin.initializeApp({
    credential: admin.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });

module.exports = { getAuth: () => getAuth(app) };
