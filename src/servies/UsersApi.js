export default async function usersApi(){
    
    try {
        return await fetch("https://my-json-server.typicode.com/yehuda-sanay/people-api/people")
        .then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}