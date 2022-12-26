import React, {useState, useContext} from 'react';
import {AuthContext} from "../AuthContext";
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css"

export const Login = () => {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authContext = useContext(AuthContext);
    const navigate=useNavigate()

    function login(e){
        e.preventDefault();
        
        if(email && password){
            //store email and password in localstorage:
            localStorage.setItem('password', password);
            localStorage.setItem('email', email);
             
            authContext.setAuth({password, email});
            //path navigation to Posts:
            navigate('/Posts')

        //empty fields
        } else {
            alert('Please enter your email and password');
        }
    }
    

    return (
        <div className="auth-form-container">
           
            <h2 className="Login">Login</h2>
          
            <form className="login-form" >           
                <label  htmlFor="email">email</label>   
            
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@example.com"  name="email" />
        
                <label htmlFor="password">Password</label>
                
                <input   onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"  autoComplete="on" name="password" />
               
                <button  type="submit" onClick={login}>Login</button>
            </form>
         
        </div>
    )
}