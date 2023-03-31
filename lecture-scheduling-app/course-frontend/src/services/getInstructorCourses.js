export default async function getInstructorCourses(userId) {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    
    try {
        const response = await fetch(`http://localhost:3001/instructor/courses/${userId}`, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json()
        // console.log(data)
        return data;
    } catch (error) {
        console.error('There was a problem registering the admin:', error);
    }
  }