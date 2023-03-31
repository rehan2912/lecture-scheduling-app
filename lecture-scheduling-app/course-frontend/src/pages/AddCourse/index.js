import React, { useState } from 'react'
import addCourse from '../../services/addCourse';
import './addcourse.css'
export default function AddCourse() {
    const [coursename, setCourseName] = useState('');
    const [level, setLevel] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const userId = localStorage.getItem("userId")
    async function handleSubmit(e) {
        e.preventDefault();
        const courseData = {
            userId,
            name: coursename,
            level: level,
            description: description,
            image: image,
            lectures: []
        };
        const response = await addCourse(courseData);
    }

    return (
        <div className="form-container">
            <h2>Add Course</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="coursename">Name:</label>
                    <input type="text" id="coursename" name="coursename" onChange={e => setCourseName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="level">Level:</label>
                    <input type="text" id="level" name="level" onChange={e => setLevel(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image" onChange={e => setImage(e.target.value)}/>
                </div>
                <button type="submit">Add Course</button>
            </form>
        </div>

    )
}
