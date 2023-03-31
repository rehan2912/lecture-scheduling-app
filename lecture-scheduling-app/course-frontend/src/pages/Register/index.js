import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import registerAdmin from '../../services/registeradmin';
import registerInstructor from '../../services/registerInstructor';
import './register.css';
export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleTypeChange = event => {
        setType(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (type == "admin") {
            registerAdmin(email, username, password)
            navigate("/admin")
        }
        if (type == "instructor") {
            registerInstructor(email, username, password)
            navigate("/instructor")
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="form">
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="type" className="form-label">Type:</label>
                    <select id="type" value={type} onChange={handleTypeChange} className="form-input">
                        <option value="">Select Type</option>
                        <option value="admin">Admin</option>
                        <option value="instructor">Instructor</option>
                        <option value="student">Student</option>
                    </select>
                </div>
                <button type="submit" className="btn">Register</button>
            </form>
        </div>
    );
}
