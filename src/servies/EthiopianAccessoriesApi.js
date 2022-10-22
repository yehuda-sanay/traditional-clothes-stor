const ETHIOPIAN_ACCESSORIES="https://my-json-server.typicode.com/yehuda-sanay/ethiopian-clothing/accessories"
export default function getEthiopianBoyApi(){
    try {
        return  fetch(ETHIOPIAN_ACCESSORIES).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}