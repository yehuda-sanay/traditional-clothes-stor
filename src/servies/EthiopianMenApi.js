const ETHIOPIAN_MEN="https://my-json-server.typicode.com/yehuda-sanay/ethiopian-clothing/men"
// export default async function getEhtiopianMenApi(){
//  return await fetch("https://my-json-server.typicode.com/yehuda-sanay/ethiopian-clothing/men")
//  .then(res=>res.json())
//  .then(data=>console.log(data))

// }
export default function getEhtiopianMenApi(){
    try {
        return  fetch("https://my-json-server.typicode.com/yehuda-sanay/ethiopian-clothing/men").then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}

