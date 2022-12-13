import React from "react";
import { Link, Outlet, useLocation } from 'react-router-dom';
import './sass/layout.css';

const Layout = () => {

    const {pathname} = useLocation();
    console.log(pathname)
    return (
        <>
            <ul className="menu">
                <li>
                    <Link to='/' className={pathname === '/' ? 'active' : 'default'}> Home</Link>
                </li>
                <li>
                    <Link to='/product' className={pathname === '/product' ? 'active' : 'default'}> ProDucts</Link>
                </li>
                <li>
                    <Link to='/contact' className={pathname === '/contact' ? 'active' : 'default'}>User - Contact</Link>
                </li>
                <li>
                    <Link to='/info-stock' className={pathname === '/info-stock' ? 'active' : 'default'}>
                        Infomation Stock
                    </Link>
                </li>
                <li>
                    <Link to='/drop-down' className={pathname === '/drop-down' ? 'active' : 'default'} >
                        Drop Down
                    </Link>
                </li>
                <li> 
                    <Link to="/axios-example" className={pathname === '/axios-example' ? 'active' : 'default'}>
                        Axios Exam
                    </Link>
                </li>
            </ul>

            <Outlet />

        </>
    )
}

export default Layout;