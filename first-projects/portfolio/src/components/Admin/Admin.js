import React, { useState } from 'react';
import { Button,  Paper, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import './Admin.css';
import './Verify.css';
import fire from '../../firebase/fireB.js';
import Verify from './Verify';


function Admin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    

    const clearErrors = () => {
        setPasswordError('');
        setEmailError('');
        
    }
    const handleLogin = (e) => {
        clearErrors();
        e.preventDefault();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => console.log(user))
        .catch((err) => {
            switch(err.code) {
                case "auth/user-disabled" :
                case "auth/user-not-found" :
                case "auth/invalid-email" :
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password": 
                    setPasswordError(err.message);
                    break;
                default :
                    setPasswordError('');
                    setEmailError('');
            }
        })
    }
    const handleVerification = () => {
       
        const login = document.querySelector(".login > .MuiPaper-root");
        const verification = document.querySelector(".verify");
        login.classList.remove("login__inactive");
        login.classList.add("login__active");
        setTimeout(() => {
            verification.classList.remove("verification__inactive");
            verification.classList.add("verification__active");
        }, 1000);
    }
    return (
        <>
        <div className="login">
            <Paper elevation={10}>
                <form onSubmit={handleLogin} autoComplete="off" autoFocus>
                    <div className="first__row">
                        <Link to="/"><ArrowBackIcon/></Link>
                        <h1>Login</h1>
                    </div>
                    <div className="form__row">
                        <TextField type="email" label="Email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <p className="error">
                            {emailError}
                        </p>
                    </div>
                    <div className="form__row">
                        <TextField type="password" label="Password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <p className="error">
                            {passwordError}
                        </p>
                    </div>
                    <Button type="submit" color="primary" variant="contained" onClick={handleVerification}>
                        Verify
                    </Button>  
                </form>
            </Paper>
        </div>
        <Verify emailError={emailError} passwordError={passwordError}/>
        </>
    )
}

export default Admin
