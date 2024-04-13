import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth"

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const creactUserByEmailAndPass =(email, password)=>{
        return createUserWithEmailAndPassword (auth, email, password)
        
    }
    const googleProvider = new GoogleAuthProvider();
    const creatUserByGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
        
    }
    
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current User is ' , currentUser)
            setUser(currentUser)
         })
         return ()=>{
            unSubscribe()
         }
    },[])

    const logOut =()=>{
        return signOut(auth)
        
    }

    const updateUserInfo =(name, photourl) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL : photourl
        })
    }


    const authInfo = {user, 
                    creactUserByEmailAndPass, 
                    signInUser,
                    updateUserInfo,
                    creatUserByGoogle,  
                    logOut}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};
AuthProvider.propTypes ={
    children : PropTypes.node
}
export default AuthProvider;