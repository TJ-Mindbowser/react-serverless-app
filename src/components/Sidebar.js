import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <Link className="nav-link" to='/'>
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                            Dashboard
                        </Link>

                        <Link className="nav-link" to="/users">
                            <div className="sb-nav-link-icon"><i className="fa fa-user" /></div>
                            Users
                        </Link>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Tanishq
                </div>
            </nav>
        </div>
    )
}
