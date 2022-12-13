import React, { } from "react";
import { Box, Grid, Button, TextField, inputProps } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import '../sass/popupcomponent.scss';
import { padding, Stack } from "@mui/system";


const BoxPopupComponent = (props) => {
    return (
        <div className="box" ref={props.boxContentRef}>
            <Box ref={props.createBoxRef}
                sx={{
                    width: 500,
                    height: "auto",
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    margin: ' 40px auto',
                    padding: "10px 20px"
                }}
                className="box-popup"
            >
                <Stack
                    sx={{}}
                >
                    <h3>
                        {props.titleBox}
                    </h3>
                    <i className="note"> Please, fill full input below. Thanks! </i>
                </Stack>

                <Box
                    sx={{
                        padding: "20px 0px"
                    }}
                >
                    <Stack
                        spacing={2}
                        direction="row"
                        sx={{
                            marginBottom: "30px"
                        }}
                    >
                        <label htmlFor={props.attributes.userId}>User ID</label>
                        <TextField type={"number"} id={props.attributes.userId} inputProps={{ min: 0 }} aria-label="Enter User ID" placeholder="Enter User ID" required />
                        <label htmlFor={props.attributes.id}>ID</label>
                        <TextField type={"number"} id={props.attributes.id} inputProps={{ min: 0 }} aria-label="Enter ID" placeholder="Enter ID" required disabled />

                    </Stack>

                    <Stack
                        direction="column" spacing={4}
                        sx={{
                            marginBottom: "30px"
                        }}
                    >
                        <label htmlFor={props.attributes.title}>Title Post</label>
                        <TextField type="text" id={props.attributes.title} aria-label="Enter the title" placeholder="Enter the title" required />
                        <label htmlFor={props.attributes.body}>Body Post</label>
                        <TextField type="text-area" id={props.attributes.body} aria-label="Enter body section post" placeholder="Enter body section post" required />
                    </Stack>

                    <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>

                        <Button variant="contained"
                            sx={{
                                textAlign: "center",
                                textTransform: "none",
                                color: "#fff",
                                fontSize: "12px",
                                fontWeight: "bold",
                                backgroundColor: 'grey.500',
                                '&:hover': {
                                    background: "#4caf50",
                                },
                            }}
                            onClick = {(e) => {props.onPost(e,props.status)}}
                        >
                            {props.action}
                        </Button>

                        <Button variant="contained"
                            sx={{
                                textAlign: "center",
                                textTransform: "none",
                                color: "#fff",
                                fontSize: "12px",
                                fontWeight: "bold",
                                backgroundColor: 'grey.500',
                                '&:hover': {
                                    background: "#4caf50",
                                },
                            }}
                            onClick={props.onHideBoxShow}
                        >
                            Close
                        </Button>
                    </Stack>
                </Box>

            </Box>
        </div>
    )
}


export default BoxPopupComponent;
