export default async function SendFMessages({id, messag}){
    try {
        const body = {messag};
        const newMessage = await fetch(`http://localhost:5000/api/message/${+id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
    } catch (error) {
        console.log(error);
    }
}