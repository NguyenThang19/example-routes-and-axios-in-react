import React, { useRef } from "react";
import { Button } from "@mui/material";
import "../sass/buttonComponent.scss";


export default function ButtonTable(props) {

    // Use Ref Element
    const buttonRef = useRef(null);

    return (
        <Button
            variant="outlined"
            sx={{ marginTop: "50px", marginLeft: "10px" }}
            ref={buttonRef}
            onClick={(e) => {props.onShowData(e,true)}}
            id={props.id === "" ? "" : props.id} >
            {props.title}
        </Button>
    )
}
