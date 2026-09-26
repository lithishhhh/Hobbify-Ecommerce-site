const admin = require('../config/firebaseAdmin');
const UserProfile = require('../models/UserProfile');

const ADMIN_FIREBASE_UID = '2MRrfTnQH5amE5jF3FvQ83ssBHb2';

const protectWithFirebase = async (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';

  if (!token) return res.status(401).json({ message: 'Login required' });

  try {
    const decoded = await admin.getAuth().verifyIdToken(token);
    const user = await UserProfile.findOneAndUpdate(
      { firebaseUid: decoded.uid },
      {
        firebaseUid: decoded.uid,
        name: decoded.name || decoded.email?.split('@')[0] || 'Hobbify User',
        email: decoded.email,
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    req.user = user;
    next();
  } catch (error) {
    console.error('Firebase authentication failed:', error.code || error.message);
    res.status(401).json({ message: 'Invalid Firebase session' });
  }
};

const requireAdmin = (req, res, next) => {
  if (req.user?.firebaseUid !== ADMIN_FIREBASE_UID) {
    return res.status(403).json({ message: 'Admin access required' });
  }
  return next();
};

module.exports = { protectWithFirebase, requireAdmin };
