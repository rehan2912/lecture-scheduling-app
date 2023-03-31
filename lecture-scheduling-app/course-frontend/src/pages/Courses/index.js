import React, { useEffect, useState } from 'react'
import Course from '../../components/Course'
import getCourses from '../../services/getCourses'
import getInstructorCourses from '../../services/getInstructorCourses'
import './courses.css'
export default function Courses() {
    const [data, SetData] = useState()
    const userId = localStorage.getItem("userId")
    const type = localStorage.getItem("type")
    useEffect(() => {
        const getAllcourses = async () => {
            if (type == "admin") {
                SetData(await getCourses())
            }
            if (type == "instructor") {
                SetData(await getInstructorCourses(userId))
            }
        }
        getAllcourses();
    }, [])
    return (
        <div className='courses-container'>{data?.map((item) => {
            return <Course item={item} key={item._id} />
        })}</div>
    )
}
