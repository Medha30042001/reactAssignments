import {auth} from '@/lib/firebase'
import { createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth"


export const authService = {
    login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    },

    signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    },

    logout() {
        return signOut(auth);
    },

    onAuthChange(callback) {
        return onAuthStateChanged(auth, callback);
    },
}