import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_AUTH);

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };