import React, { } from "react";
import user from '../views/image/user.png';
import email from '../views/image/email.png';
import logOut from '../views/image/log-out.png';
import edit from '../views/image/edit.png';
import question from '../views/image/question.png';
import settings from '../views/image/settings.png';
import './sass/dropDown.scss';
import { useState } from "react";
import FormLogin from "./formComponent";
import {Button} from '@mui/material';

let NavigationUser = (props) => {
    return (
        <li className="options">
            <img src={props.image} />
            <span> {props.content} </span>
        </li>
    )
}

const DropDownComponent = () => {
    const [open, setOpen] = useState(false);

    const HanddleToogleNavUser = () => {
        setOpen(!open);
    }
    return (
        <div className="container-content">
            <FormLogin />
            <Button variant="contained" className="btn-popup-login" size="small" style={{'marginTop': '10px'}}>Pop up Login</Button>


            <div className="user-controls">
                <div className="avatar-user" onClick={HanddleToogleNavUser}>
                    <img src={user} />
                </div>
                <ul className= {`nav-user ${open ? 'enable' : 'disable'}`} >
                    <div className="title">
                        <p className="name-user">
                            Full Name
                        </p>
                        <p className="occupation">
                            Occupation
                        </p>
                    </div>
                    <NavigationUser image={user} content='My Profile' />
                    <NavigationUser image={edit} content='Edit Profile' />
                    <NavigationUser image={email} content='Inbox' />
                    <NavigationUser image={settings} content='Settings' />
                    <NavigationUser image={question} content='Helps' />
                    <NavigationUser image={logOut} content='Log Out' />
                </ul>
            </div>
        </div>
    )
}

export default DropDownComponent;