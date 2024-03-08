import firebase from "firebase/compat";
import { ApplicationVerifier, Auth, PhoneInfoOptions, RecaptchaVerifier } from "firebase/auth";
import { auth, db } from "../../services/firebaseConfig";


interface authContext {
    login: Function;
    register: Function;
    logout: Function;
    getUserData: Function;
    code: string;
    phoneNumber: string;
}

    


    const register = (email: string, password: string, data: any) => {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                if (!userCredential.user) throw new Error("@login: failed to login");
                db.collection("User").doc(userCredential.user.uid).set(data)
            })
    }

    const login = async (phoneNumber: string, appVerifier: ApplicationVerifier) => {
        auth.signInWithPhoneNumber(phoneNumber, appVerifier)
    }
