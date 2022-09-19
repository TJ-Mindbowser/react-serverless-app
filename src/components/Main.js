import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from './Footer'
export default function Main() {
    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid p-2 " >
                    <Nav title={'Users'} />
                    <div className='card'>
                        <div className='cardBody' style={{ "backgroundColor": "#EEF1FF" }}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

const Nav = (props) => {
    const { title } = props
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">{title}</li>
            </ol>
        </nav>
    )
}
