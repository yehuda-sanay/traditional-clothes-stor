const ETHIOPIAN_JEWELRY="https://my-json-server.typicode.com/yehuda-sanay/ethiopian-clothing/jewellery"
export default function getEthiopianjewelryApi(){
    try {
        return  fetch(ETHIOPIAN_JEWELRY).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}