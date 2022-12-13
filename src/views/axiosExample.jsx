import React, { useEffect, useState, useRef } from "react";
import TableComponent from "./component/tableComponent";
import axios, { AxiosResponse, AxiosInstance } from 'axios';
import { Table, Box, TextField } from "@mui/material";
import ButtonTable from "./component/Button";
import BoxPopupComponent from "./component/BoxPopupComponent";


// Fake data 
let headList = [
    "User Id", "id", "title", "body"
]

const AxiosExample = () => {
    let urlAPI = " http://localhost:3000/dataPost";
    const [dataPost, setDataPost] = useState([]);
    const [id, setIdUser] = useState(0);
    const [statusBox, setStatusBox] = useState({});
    const [attributes, setAttribute] = useState({
        userId: 'user-id',
        id: 'id',
        title: 'title',
        body: 'body'
    });
    const [status, setStatus] = useState(true);

    let inputRef = useRef(null);
    let boxContainRef = useRef(null);
    let createBoxRef = useRef(null);

    // Get All Data
    function handdleShowALlData() {
        axios.get(urlAPI)
            .then((response) => {
                setDataPost(response.data);
            })
            .catch(
                () => console.log('ERROR')
            )
            .finally(() => console.log('Finally'))
    }


    // Get ID
    function getId(e) {
        setIdUser(e.target.value);
    }

    // Get Data By ID
    function getDataById() {
        let newURL = urlAPI + `?id=${id}`;
        axios.get(newURL)
            .then((response) => {
                setDataPost(response.data);
                console.log(response.data)
            })
            .catch(
                () => console.log('ERROR')
            )
            .finally(() => console.log('Finally'))
    }

    // Show Box Create Post
    function showBoxCreate(e, status) {
        boxContainRef.current.classList.add('active-box');
        if (status) {
            setStatusBox({
                titleBox: "Fill Information A New Post",
                action: "Create"
            })
            setStatus(true);
            let maxID = parseInt(dataPost[0].id);
            for (var i = 1; i < (dataPost.length); i++) {
                if (parseInt(dataPost[i].id) > maxID) {
                    maxID = parseInt(dataPost[i].id)
                }
            }
            document.querySelector("#user-id").value = " ";
            document.querySelector("#id").value = maxID + 1;
            document.querySelector("#title").value = " ";
            document.querySelector("#body").value = " ";
        } else {
            setStatusBox({
                titleBox: "Check and Update Information For Post",
                action: "Update"
            });
            setStatus(false);
            let dataID = parseInt(e.target.getAttribute("data-id"));
            let postCurrent = dataPost.find(value => parseInt(value.id) === dataID)
            let valueUserID = postCurrent.userId;
            let valueID = postCurrent.id;
            let valueTitle = postCurrent.title;
            let valueBody = postCurrent.body;
            document.querySelector("#user-id").value = valueUserID;
            document.querySelector("#id").value = valueID;
            document.querySelector("#title").value = valueTitle;
            document.querySelector("#body").value = valueBody;
        }
    }

    function HideBoxCreate() {
        boxContainRef.current.classList.remove('active-box');
    }

    // Function Delete Data JSON
    function handdleDelete(e) {
        let id = e.target.getAttribute("data-id");
        axios.delete(`${urlAPI}/${id}`)
            .then((res) => {
                console.log(res)
                alert(`Deleted Post with id: ${id} success!`);
                handdleShowALlData();
            })
            .catch(err => console.log(err))
            .finally(() => {
                console.log("Finally")
            })
    }

    function handdlePost(e, status) {

        e.stopPropagation()
        let valueUserID = document.querySelector("#user-id").value;
        let valueID = document.querySelector("#id").value;
        let valueTitle = document.querySelector("#title").value;
        let valueBody = document.querySelector("#body").value;


        if (status) {
            axios.post(urlAPI, {
                'userId': valueUserID,
                'id': valueID,
                'title': valueTitle,
                'body': valueBody
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            axios.put(`${urlAPI}/${parseInt(valueID)}`, {
                'userId': valueUserID,
                'userId': valueID,
                'title': valueTitle,
                'body': valueBody
            })
                .then(res => { console.log(res) })
                .catch(error => { console.log(error) })
            console.log("this is event update");
        }
        HideBoxCreate();
        handdleShowALlData();
    }

    return (
        <>
            <Box sx={{ display: "flex", position: "relative" }}>
                <ButtonTable title=" Get All" onShowData={handdleShowALlData} />
                <TextField type="number" inputProps={{ min: 1, max: 10 }} size="small" sx={{ width: "100px", marginTop: "50px", marginLeft: "25px" }} label="Enter ID" aria-label='get data by id' ref={inputRef} onChange={getId} />
                <ButtonTable title=" By ID" onShowData={getDataById} />
                <ButtonTable title="Create New Post" id="btn-create-post" onShowData={showBoxCreate} />
            </Box>
            <TableComponent
                size={headList}
                dataList={dataPost}
                onShowBox={showBoxCreate}
                onDelete={handdleDelete}
            />
            <BoxPopupComponent
                createBoxRef={createBoxRef}
                boxContentRef={boxContainRef}
                onHideBoxShow={HideBoxCreate}
                titleBox={statusBox.titleBox}
                action={statusBox.action}
                attributes={attributes}
                onPost={handdlePost}
                status={status}
            />
        </>
    )
}

export default AxiosExample;