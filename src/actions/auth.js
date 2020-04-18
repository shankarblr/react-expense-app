import {firebase, googleAuthProvider} from './../firebase/firebase';

export const login = (uid) => ({
    type :'LOGIN',
    uid :uid
});

export const startLogin = () =>{
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}


export const logout = () => ({
    type :'LOGIN_OUT'
});

export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut();
    }
};