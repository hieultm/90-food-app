import React, { useEffect, useState } from 'react'

import {auth} from "../configs/firebaseConfig"

import useFirestoreProducts from "../hooks/useFirestoreProducts";
import { useHistory, useLocation } from 'react-router-dom';

const AuthContext = React.createContext()

function AuthProvider({ children }) {
    const [user,setUser] = useState(null)
    const [hasHeader, setHasHeader] = useState(true)

    const history = useHistory()
    const { pathname } = useLocation();

    const { addToFirestore } = useFirestoreProducts()

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user

                setUser({ displayName, email, uid, photoURL })
                addToFirestore(uid)

                if (pathname.includes("login")) {
                    history.push("/home")
                }
            }
        });

        return () => unsubscribed
    }, [])

    return(
        <AuthContext.Provider 
            value= {{
                user,
                setUser,
                hasHeader,
                setHasHeader,
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;
export {AuthContext}