export default async function getInstructorLectures(userId, courseId) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, courseId })
    };

    try {
        const response = await fetch('http://localhost:3001/instructor/lectures', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.error('There was a problem registering the admin:', error);
    }
}