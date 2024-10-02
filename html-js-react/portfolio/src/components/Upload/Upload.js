import { Button, Paper, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import fire from '../../firebase/fireB';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CheckIcon from "@material-ui/icons/Check";
import './Upload.css';
const db = fire.firestore();

function Upload() {

    const [fileUrl, setFileUrl] = useState(null);
    const [pName, setPName] = useState('');
    const [pLink, setPLink] = useState('');
    const [pGit, setpGit] = useState('');
    const [pMain, setpMain] = useState('');
    const [pFunc, setpFunc] = useState('');
    const [selectedDate, setSelectedDate] = useState();

    const onFileChange = async(e) => {
        const file = e.target.files[0];
        const storageRef = fire.storage().ref();
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL())
    }
    const handleSignOut = () => {
        fire.auth().signOut()
        
    }
    const clearInputs = (e) => {
        setPLink('');
        setPName('');
        setpMain('');
        setpFunc('');
        setpGit('');
    }
    const onSubmitHandle = (e) => {
        e.preventDefault();
        if (!pName || !pLink || !pMain || !fileUrl || !selectedDate || !pFunc || !pGit) {
            return
        } else {
            db.collection("projects").doc(pName).set({
                name: pName,
                timestamp: new Date(selectedDate),
                link: pLink,
                github: pGit,
                main: pMain,
                functionality: pFunc,
                image: fileUrl
            })
            
        }
        document.querySelector(".success__message").classList.add("success__active");
        document.querySelector(".success__message").style.visibility = "visible";
        setTimeout(() => {
            document.querySelector(".success__message").classList.remove("success__active");
            document.querySelector(".success__message").classList.add("success__inactive");
        }, 3000);
        setTimeout(() => {
            clearInputs();
            document.querySelector(".success__message").classList.remove("success__inactive");
            document.querySelector(".success__message").style.visibility = "hidden";
        }, 3100);
    }
    return (
        <div className="upload">
            <Paper elevation={10}>
                <form onSubmit={onSubmitHandle}>
                    <div className="first__row">
                    <Link to="/" title="To Homepage"><ArrowBackIcon/></Link>
                    <h1>Add a new project</h1>
                    </div>
                    <TextField type="text" label="Project name" autoComplete="off" value={pName} onChange={e => setPName(e.target.value)}/>
                    <TextField type="text" label="Project link" autoComplete="off" value={pLink} onChange={e => setPLink(e.target.value)}/>
                    <TextField type="text" label="Github link" autoComplete="off" value={pGit} onChange={e => setpGit(e.target.value)}/>
                    <TextField type="text" label="Main Language" autoComplete="off" value={pMain} onChange={e => setpMain(e.target.value)}/>
                    <TextField type="text" label="Login functionality" autoComplete="off" value={pFunc} onChange={e => setpFunc(e.target.value)}/>
                    <TextField type="date" onChange={e => setSelectedDate(e.target.value)}/>
                    <input type="file" onChange={onFileChange}/>
                    <Button type="submit" color="primary" variant="contained">Add</Button>
                    <Button color="primary" onClick={handleSignOut}>Logout</Button>
                </form>
            </Paper>
            <div className="success__message">
                Project Added 
                <CheckIcon/>
            </div>
        </div>
    )
}

export default Upload
