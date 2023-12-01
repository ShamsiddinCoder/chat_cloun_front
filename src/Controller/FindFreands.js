export default async function findFreands(name){
    try {
        const body = {name};
        const searchFriend = await fetch(`http://localhost:5000/api/find`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(elem => {
            return elem.json()
        });
        
        return searchFriend;
    } catch (error) {
        console.log(error);
    }
}