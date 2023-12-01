export default async function RemoveFMessages(id){
    try {
        const removeMessage = await fetch(`http://localhost:5000/api/message?id=${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        }).then(elem => {
            return elem.json();
        });

    } catch (error) {
        console.log(error);
    }
}