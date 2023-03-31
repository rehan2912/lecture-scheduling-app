import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LectureDetails from '../../components/LectureDetails';
import getInstructorLectures from '../../services/getInstructorLectures'
import getAdminLectures from '../../services/getLectureByCourse';
import './lectures.css'
export default function Lectures() {
    const userId = localStorage.getItem("userId")
    const type = localStorage.getItem("type")
    const [data, SetData] = useState();
    const { courseId } = useParams()
    useEffect(() => {
        const getLecture = async () => {
            if (type == "instructor") {
                SetData(await getInstructorLectures(userId, courseId))
            }
            if (type == "admin") {
                SetData(await getAdminLectures(courseId))
            }
        }
        getLecture()
    }, [])
    console.log(data)
    return (
        <div className='lectures-container'>
            <h2>Lectures</h2>
            <div>{data?.map((item) => {
            return <LectureDetails item={item} key={item.lecture_id}/>
        })}</div>
        </div>
        
    )
}
