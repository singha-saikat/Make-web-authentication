import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
 export const AuthContext  = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
     const createLogin = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword (auth ,email,password);
        
     }
     const logOut = () => {
        setLoading(true);
       return signOut(auth);
     }
     const signInWithGoogle = () => {
        setLoading(true)
       return  signInWithPopup(auth,googleProvider);

     }

     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , (currentUser) => {
            console.log('observing current user:', currentUser);
            setUser(currentUser);
            setLoading(false);
        } )
        return () => {
            unSubscribe();
        } 
        
     },[])
    
    const info = {user,createUser,createLogin,logOut,loading,signInWithGoogle}
    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}