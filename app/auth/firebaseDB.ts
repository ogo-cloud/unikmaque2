
import { initializeApp } from "firebase/app";
import {getAuth, RecaptchaVerifier} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAHVOFLrsqiiTTDVwSQvXN2ClWfbiDZqCo",
    authDomain: "uniqmaque-899a1.firebaseapp.com",
    projectId: "uniqmaque-899a1",
    storageBucket: "uniqmaque-899a1.firebasestorage.app",
    messagingSenderId: "297415892822",
    appId: "1:297415892822:web:8d90f09ad4e67567b080f7",
    measurementId: "G-6TG2VHL174"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.settings.appVerificationDisabledForTesting= true;

//const recaptcha = getAnalytics(app);

/*export const recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
    size: 'invisible',
    callback: (response:any) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
    }
});*/
