const ETHIOPIAN_MEN="https://my-json-server.typicode.com/yehuda-sanay/ethiopian-clothing/men"
export default function getEhtiopianMenApi(){
try {
    return fetch(ETHIOPIAN_MEN).then(res=>res.json())
} catch (error) {alert(error)
    
}
}

