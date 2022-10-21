const ETHIOPIAN_BOY="https://my-json-server.typicode.com/yehuda-sanay/ethiopian-kids-clothing/boy"
export default function getEthiopianBoyApi(){
    try {
        return  fetch(ETHIOPIAN_BOY).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}