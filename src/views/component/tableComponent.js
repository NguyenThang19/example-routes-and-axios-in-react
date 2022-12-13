import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Grid } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../sass/tableComponent.scss'

const TableComponent = (props) => {
    const [sizeList, setSizeList] = useState([]);
    const [dataList, setdataList] = useState([]);
    useEffect(() => {
        setSizeList(props.size);
        setdataList(props.dataList);
    })
    return (
        <TableContainer sx={{ margin: "0 20px" }}>
            <Table sx={{ width: "80%", margin: "50px auto", textAlign: "center" }} aria-label='list infomation user' >
                <TableHead>
                    <TableRow>
                        {
                            sizeList.map((value, index) => {
                                return <TableCell sx={{ textAlign: "center", fontWeight: "600" }} key={index}> {value} </TableCell>
                            })
                        }
                        <TableCell sx={{ textAlign: "center", fontWeight: "600" }}> Options </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        dataList.map((value, index) => {
                            return <TableRow key={index} >
                                <TableCell id={`userID-${value.userId}`} > {value.userId}</TableCell>
                                <TableCell id={`postID-${value.id}`} className="post-id"> {value.id}</TableCell>
                                <TableCell> {value.title}</TableCell>
                                <TableCell> {value.body}</TableCell>
                                <TableCell>
                                    <Grid justifyContent="space-between" alignItems="center">
                                        <EditIcon className="icons edit-icon"
                                            sx={{ color: "#2A5DD4" }}
                                            titleAccess="Edit"
                                            onClick={(e) => { props.onShowBox(e, false) }}
                                            data-id={value.id}
                                        />
                                        <DeleteIcon className="icons delete-icon"
                                            sx={{ color: "#2A5DD4" }}
                                            titleAccess="Delete"
                                            data-id={value.id}
                                            onClick = {(e) => {props.onDelete(e)}}
                                        />
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent;