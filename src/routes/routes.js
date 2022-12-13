import React, { } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AxiosExample from "../views/axiosExample";
import Contact from "../views/Contact";
import DropDownComponent from "../views/dropDowns";
import HomePage from "../views/HomePage";
import InfoStockPage from "../views/InfoStock";
import Layout from "../views/layout";
import Products from "../views/Products";


const Routers = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage/>} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/product" element={< Products />} />
                        <Route path="/info-stock" element={<InfoStockPage/>} />
                        <Route path="/drop-down" element={<DropDownComponent/>} />
                        <Route path="/axios-example" element={<AxiosExample />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers;