import admin from "firebase-admin";

const parseServiceAccount = () => {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
  }
};

export const getFirebaseAdmin = () => {
  if (admin.apps.length) return admin;

  const serviceAccount = parseServiceAccount();
  if (serviceAccount) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    return admin;
  }

  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
  return admin;
};

export const verifyFirebaseIdToken = async (idToken) => {
  if (!idToken) {
    const error = new Error("Missing Google ID token");
    error.statusCode = 400;
    throw error;
  }

  try {
    return await getFirebaseAdmin().auth().verifyIdToken(idToken);
  } catch {
    const error = new Error("Invalid Google ID token");
    error.statusCode = 401;
    throw error;
  }
};
