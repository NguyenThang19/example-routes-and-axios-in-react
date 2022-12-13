import React, { useState, useEffect } from "react";
import { stockData } from "../data/stockData";
import '../views/infostock.css';

const InfoStockPage = () => {
    let urlAlbums = "https://jsonplaceholder.typicode.com/albums";
    const [itemsAblum, setItemsAlbum] = useState([]);
    useEffect(() => {
        fetch(urlAlbums)
            .then(res => res.json())
            .then(
                (result) => {
                    setItemsAlbum(result)
                }
            )
    }, []);

    return (
        <div className="container-1 container-content">
            <div className="container-left">
                <table>
                    <thead>
                        <tr>
                            <th>
                                Company
                            </th>
                            <th>
                                Sticket
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Time Elapsed
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            stockData.map((value, key) => {
                                return <tr key={key}>
                                    <td> {value.company} </td>
                                    <td> {value.ticker} </td>
                                    <td> {value.stockPrice} </td>
                                    <td> {value.timeElapsed} </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className="container-right">
                <table>
                    <thead>
                        <tr>
                            <th>
                                Use ID
                            </th>
                            <th>
                                ID
                            </th>
                            <th>
                                Title
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemsAblum.map((value, index) => {
                                    return <tr key={index} >
                                        <td>
                                            {value.userId}
                                        </td>
                                        <td>
                                            {value.id}
                                        </td>
                                        <td>
                                            {value.title}
                                        </td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InfoStockPage;