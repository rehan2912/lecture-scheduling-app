export default async function getAdminLectures(courseId) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = await fetch(`http://localhost:3001/admin/lectures/${courseId}`, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.error('There was a problem registering the admin:', error);
    }
}