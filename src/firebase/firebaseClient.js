import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
	apiKey: "AIzaSyD14mpPzt2UXNQQc81-EiN98gILFyPOePQ",
	authDomain: "bookinghotel-b7a8b.firebaseapp.com",
	projectId: "bookinghotel-b7a8b",
	storageBucket: "bookinghotel-b7a8b.appspot.com",
	messagingSenderId: "528183003900",
	appId: "1:528183003900:web:f1abd0f6a250287fb1e579",
	measurementId: "G-161WRJDCL7"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
const getStorageClient = getStorage();
export { db, getStorageClient };
export default firebase;