import { toast } from "react-hot-toast";

export default async function registerAdmin(email, username, password) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    };
    
    try {
        const response = await fetch('http://localhost:3001/admin/register', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json()
        localStorage.setItem("userId", data._id)
        localStorage.setItem("username", data.username)
        localStorage.setItem("type", "admin")
        toast.success("Admin Registered")
        return await response.json();
        
    } catch (error) {
        console.error('There was a problem registering the admin:', error);
    }
  }