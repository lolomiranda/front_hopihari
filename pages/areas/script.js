document.addEventListener('DOMContentLoaded', async function(){
    const area = "Mistieri";
    const tokem = localStorage.getItem('tokem');
    const response = await fetch(`http://localhost:3000/brinquedos/${area}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        authorization: "Bearer" + tokem
    });

    const data = await response.json();
    console.log(data);
});