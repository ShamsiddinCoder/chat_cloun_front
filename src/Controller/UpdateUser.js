export default async function updateUsers ({name = null, conPass = null, avatar = null}){
    try {
        const body = {name, password: conPass, avatar};
        const update = await fetch(`http://localhost:5000/api/update`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        return update.status;
        
    } catch (error) {
        console.log(error);
    }
}