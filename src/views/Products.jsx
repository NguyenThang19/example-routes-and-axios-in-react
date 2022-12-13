import React from "react";
import { useState } from "react";
import { Input, InputAdornment, Stack, TextField, Box, MenuItem, Grid, FormControlLabel, Checkbox } from "@mui/material";
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';

const Product = () => {
    const [statusPW, setStatusPassword] = useState(true);
    const [statusCheck, setStatusCheck] = useState(false);
    const handleCheck = () => {
        setStatusCheck(!statusCheck)
    }

    const [valueSelect, setValueSelect] = useState('');
    console.log(valueSelect);
    const haddleChangeValueSelect = (e) => {
        setValueSelect(e.target.value);

    };

    const handdleChangeStatusPass = () => {
        setStatusPassword(!statusPW);
    }
    return (
        <div className="container-content">
            {/* <label htmlFor="password-field">
                Enter PassWord
            </label>
            <input type={`${statusPW ? 'password' : 'text'}`} name="#" id="password-field" />
            <i className="icon">
                {
                    statusPW ? <VisibilityTwoToneIcon onClick = { handdleChangeStatusPass }/> : <VisibilityOffTwoToneIcon onClick = { handdleChangeStatusPass }/>
                }
            </i> */}

            <Grid container spacing='2'>
                <Grid item sx='4'>
                    <Stack direction="row" >
                        <TextField
                            label="Enter Password"
                            type={statusPW ? 'password' : 'text'}
                            sx={{ m: 1, width: '25ch', height: "40ch" }}
                            helperText="Dont show your password to anyone "
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    {
                                        statusPW ? <VisibilityOffTwoToneIcon onClick={handdleChangeStatusPass} /> : <VisibilityTwoToneIcon onClick={handdleChangeStatusPass} />
                                    }
                                </InputAdornment>
                            }}
                        />
                    </Stack>
                </Grid>

                <Grid item sx='4'>
                    <Stack direction="row">
                        <Box
                            sx={{
                                width: 300
                            }}>
                            <TextField
                                sx={{ width: 200 }}
                                select
                                label='Gender'
                                onChange={haddleChangeValueSelect}
                                value={valueSelect}
                                color="error"
                                size="small"
                                helperText="Please select options"

                            >
                                <MenuItem value="0">
                                    Male
                                </MenuItem>
                                <MenuItem value="1">
                                    Female
                                </MenuItem>
                            </TextField>
                        </Box>
                    </Stack>
                </Grid>

                <Grid item sx='4'>
                    <Stack direction='row'>
                        <FormControlLabel
                            label="Checking"
                            checked={statusCheck}
                            control={<Checkbox />}
                            // sx={{ display: 'none' }}
                        />

                        <Checkbox
                            icon = {<BookmarkAddedOutlinedIcon/>}
                            checkedIcon = {<BookmarkAddedOutlinedIcon/>}
                            checked = {statusCheck}
                            onChange={handleCheck}
                        />


                    </Stack>
                </Grid>
            </Grid>
        </div >
    )
}

export default Product;