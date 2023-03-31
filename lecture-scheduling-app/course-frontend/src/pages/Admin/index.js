import React from 'react'
import { useNavigate } from 'react-router-dom'
import './admin.css'
export default function Admin() {
    const navigate = useNavigate();
    const type = localStorage.getItem("type")
    let username = localStorage.getItem("username")
    username = username.toUpperCase()
    return (
        <div className="container">
            <h1>Welcome {username}</h1>
            <div className="btn-group">
                <button className="btn" onClick={() => navigate(`/${type}/addcourse`)}>Add Course</button>
                <button className="btn" onClick={() => navigate(`/${type}/courses`)}>Show Courses</button>
            </div>
        </div>
    )
}
