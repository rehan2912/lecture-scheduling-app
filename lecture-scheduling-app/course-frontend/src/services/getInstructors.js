export default async function getInstructors() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = await fetch('http://localhost:3001/admin/instructors', requestOptions);
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