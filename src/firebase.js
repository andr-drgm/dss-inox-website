import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCGpHPbUXodgiAs2q7mp0K503TC75ehSnw",
    authDomain: "dss-inox-website.firebaseapp.com",
    databaseURL: "https://dss-inox-website.firebaseio.com",
    projectId: "dss-inox-website",
    storageBucket: "dss-inox-website.appspot.com",
    messagingSenderId: "1043832778872",
    appId: "1:1043832778872:web:37f9c6ea4f267082febd8d",
    measurementId: "G-QMCNE66TQC"
  });

//   const analytics = firebaseApp.analytics();

  export { firebaseApp };