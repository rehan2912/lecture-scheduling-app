import { toast } from "react-hot-toast";

export default async function addLecture(data) {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    
    try {
        const response = await fetch('http://localhost:3001/admin/addLecture', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json()
        // console.log(data)
        toast.success("lecture added")
        return data;
    } catch (error) {
        alert("User Already Scheduled")
        // console.error('There was a problem registering the admin:', error);
    }
  }