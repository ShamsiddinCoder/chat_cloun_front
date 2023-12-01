export default async function freandLink(id){
    try {
        await fetch(`http://localhost:5000/api/freand/${id}`,{
            method: 'POST',
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        });
    } catch (error) {
        console.log(error);
    }
}