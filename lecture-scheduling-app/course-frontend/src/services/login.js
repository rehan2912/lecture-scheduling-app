import { toast } from "react-hot-toast";

export default async function login(email, password, type) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password ,type})
    };

    try {
        // console.log("hi")
        const response = await fetch('http://localhost:3001/login', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json()
        localStorage.setItem("userId", data.userId)
        localStorage.setItem("username", data.username)
        localStorage.setItem("type", type)
        toast.success("Login Successful")
        return await response.json();
    } catch (error) {
        console.error('There was a problem registering the admin:', error);
    }
}