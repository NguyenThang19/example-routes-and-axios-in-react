import React, { } from "react";
import { Stack, Box } from "@mui/material";


// Import Icons
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import WifiIcon from '@mui/icons-material/Wifi';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

import './sass/form.scss';
import { useState } from "react";


let infoLogin = [
    {
        text: 'User Name',
        icon: PersonRoundedIcon,
        type: 'text'
    },
    {
        text: 'Pass Word',
        icon: LockRoundedIcon,
        type: 'password'
    }
];

const InputForm = (props) => {
    return (
        <input  type= {props.type} placeholder = {props.placeholder} />
    )
}

const FormLogin = () => {
    return (
        <Box sx={{ textAlign: "left", color: "white", padding: "10px 20px" }}>
            <h2>
                Log In
            </h2>

            <Box 
                sx={{
                    padding: "20px 0px"
                }}
            >
                {
                    infoLogin.map((value) => {
                        
                    })
                }
            </Box>
        </Box>
    )
}

const FormSignIn = () => {
    return (
        <>
        </>
    )
}

const FormLog = (props) => {
    return (
        <div className={`form-contain ${props.status ? 'login' : 'sign-up'}`}>
            <Stack direction="row" alignItems="center" justifyContent={"space-between"} sx={{ color: "white", padding: "10px 20px 30px 20px" }}>
                <div className="left">
                    00:00
                </div>

                <div className="right">
                    <Stack direction="row" justifyContent="space-around" >
                        <SignalCellularAltIcon />
                        <WifiIcon />
                        <div className="icon-battery">
                            <BatteryFullIcon />
                        </div>
                    </Stack>
                </div>

            </Stack>
            <Stack direction="row">
                {
                    props.status ? <FormLogin /> : <FormSignIn />
                }
            </Stack>

            <div className="form-submit">
                {
                }
            </div>

        </div>
    )
}

const FormContainer = () => {

    const [statusUser, setStatusUser] = useState(true);
    return (
        <div className="container-form">
            <FormLog status={statusUser} />
        </div>
    )
}

export { FormLogin };
export { FormLog };
export default FormContainer;