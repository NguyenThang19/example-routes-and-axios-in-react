import React, { } from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

const DataUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(responsive => responsive.data)
            .then((data) => {
                setUsers(data)
            })
    }, [])

    return (
        <div className="container-content">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return <tr key={index}>
                                <td> {user.id} </td>
                                <td> {user.name} </td>
                                <td> {user.username} </td>
                                <td> {user.email} </td>
                                <td> {user.phone} </td>
                                <td> {user.company.name} </td>
                                <td> {user.website} </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataUsers;