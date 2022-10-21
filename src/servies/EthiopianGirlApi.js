const ETHIOPIAN_GIRL="https://my-json-server.typicode.com/yehuda-sanay/ethiopian-kids-clothing/girl"
export default function getEhtiopianGirlApi(){
    try {
        return  fetch(ETHIOPIAN_GIRL).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}