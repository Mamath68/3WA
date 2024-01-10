import React from 'react'
import { Link } from 'react-router-dom'
import './Layout.css'

function Layout({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">React Counter</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link link-light" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link-light" to='/challenge'>Challenge</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </>
    )
}

export default Layout