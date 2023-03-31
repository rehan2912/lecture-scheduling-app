import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import login from '../../services/login';
import './login.css';
export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleTypeChange = event => {
        setType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = login(email, password, type)
        if (data) {
            if (type == "admin") {
                navigate("/admin")
            }
            if (type == "instructor") {
                navigate("/instructor")
            }
        }
        else {
            alert("invalid creds")
        }
    };
    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="form-group">
                    <label for="type">Type:</label>
                    <select id="type" value={type} onChange={handleTypeChange}>
                        <option value="">Select Type</option>
                        <option value="admin">Admin</option>
                        <option value="instructor">Instructor</option>
                        <option value="student">Student</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>

    )
}
