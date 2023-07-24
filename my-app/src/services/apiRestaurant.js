const API_URL = 'https://react-fast-pizza-api.onrender.com/api'




export async function getMenu() {
    const res = await fetch(`${API_URL}/menu`)
    const {data} = await res.json()
    return data
}


export async function getOrder(id) {
  
    const res = await fetch(`${API_URL}/order/${id}`)
    const {data} = await res.json()
    return data;
}


export async function createOrder(newOrder) {
    try{

        const res = await fetch(`${API_URL}/order`, {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                "Content-Type": "application/json",
              },
        })

        const { data } = await res.json();
        return data;

    }  catch{
        
    }
}