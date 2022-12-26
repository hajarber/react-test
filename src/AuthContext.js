import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext();

export function AuthProvider(Props) {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        
        const password = localStorage.getItem('password');
        const email = localStorage.getItem('email');
        if (email) {
            setAuth({
                password, email
            });
        }

    }, []);

    return (

        <AuthContext.Provider value={{ auth, setAuth }}>
            {Props.children}
        </AuthContext.Provider>
    );

}