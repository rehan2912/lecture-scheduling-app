import React from 'react'
import './navbar.css'
export default function Navbar() {
    const type = localStorage.getItem("type")
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href={`/${type}`}>
                        Lecture Scheduling Module
                    </a>
                </div>
            </nav>
        </header>

    )
}
