import React, { useEffect, useState } from "react";
import InitializeConfig from "../Firebase/Firebase.init";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

InitializeConfig();
const useFirebase = () => {
    const { postData } = useFetch();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location) => {
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setLoading(false);
                //console.log(location);
                // navigate(location?.state?.from || "/");
            })
            .catch((error) => {
                //console.log(error);
            });
    };

    const logOut = () => {
        return signOut(auth)
            .then((result) => {})
            .catch((error) => {
                //console.log(error);
            });
    };

    //
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(true);
            if (user) {
                setLoading(false);
                setUser(user);
                // user data fetch--------->
                const name = user.displayName;
                const email = user.email;
                const img = user.photoURL;
                const role = "user";
                // const status = 'active';
                const data = { name, email, img, role };
                postData("https://g-shop-server.onrender.com/api/v1/users", data);
            } else {
                setUser({});
                setLoading(false);
            }
        });
        return () => unsubscribe;
    }, [auth, navigate]);

    return {
        signInWithGoogle,
        user,
        loading,
        logOut,
        error,
    };
};

export default useFirebase;
