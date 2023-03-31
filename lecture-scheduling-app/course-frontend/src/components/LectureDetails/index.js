import React, { useEffect, useState } from 'react'
import getInstructorName from '../../services/getUsername'
import './lecturedetails.css'
export default function LectureDetails({ item }) {
    const [name, setName] = useState('')
    useEffect(() => {
        const getName = async () => {
            setName(await getInstructorName(item.instructor_id))
        }
        getName()
    },[])
    return (
        <div className='lecture-details'>
            <p>{item.name}</p>
            <p>{item.date}</p>
            <p>{name}</p>
        </div>
    )
}
