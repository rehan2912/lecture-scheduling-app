import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import addLecture from '../../services/addLecture';
import getInstructors from '../../services/getInstructors';
import './addlecture.css'
export default function AddLecture() {
    const { courseId } = useParams()
    const [name, setName] = useState('');
    const [instructor, setInstructor] = useState([]);
    const [instructorName, setInstructorName] = useState('');
    const [instructor_id, setInstructorId] = useState('');
    const [date, setDate] = useState('');
    useEffect(() => {
        const getInstructorDetails = async () => {
            setInstructor(await getInstructors())
        }
        getInstructorDetails();

    }, [])
    // console.log(instructor)


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            courseId,
            name,
            instructor_id,
            date
        }
        addLecture(data)
    };
    return (
        <div className="form-container">
            <h2>Add Lecture</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="instructor">Instructor</label>
                    <select id="instructor" value={instructor} onChange={e => setInstructorId(e.target.value)}>
                        <option value="">-- Select Instructor --</option>
                        {instructor?.map((item) => {
                            return <option key={item._id} onClick={() => { setInstructorName(item.username) }} value={item._id}>{item.username}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} />
                </div>
                <button type="submit">Add Lecture</button>
            </form>
        </div>

    )
}
