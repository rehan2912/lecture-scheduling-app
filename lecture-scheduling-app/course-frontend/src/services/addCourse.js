import { toast } from "react-hot-toast";

export default async function addCourse(data) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    
    try {
        const response = await fetch('http://localhost:3001/admin/addCourse', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json()
        // console.log(data)
        toast.success("Course added")
        return data;
    } catch (error) {
        console.error('There was a problem registering the admin:', error);
    }
  }