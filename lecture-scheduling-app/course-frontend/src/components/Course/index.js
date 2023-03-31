import React from 'react'
import { useNavigate } from 'react-router-dom'
import python from '../../images/python.png'
import './course.css'
export default function Course({ item }) {
    const navigate = useNavigate()
    const type = localStorage.getItem("type")
    return (
        <div className="course-container">
            <div className="course-info" onClick={() => navigate(`/${type}/lectures/${item._id}`)}>
                <h2>{item.name}</h2>
                <p>Level: {item.level}</p>
                <p>Description: {item.description}</p>
                <img src={python} alt={item.name} className="course-image"/>
            </div>
            {type === "admin" ? <button className="add-lecture-button" onClick={() => { navigate(`/${type}/addlecture/${item._id}`) }}>Add Lecture</button> : null}
        </div>
    )
}
