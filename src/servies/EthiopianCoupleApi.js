const ETHIOPIAN_COUPLE="https://my-json-server.typicode.com/yehuda-sanay/ethiopian-clothing/couple"
export default function getEthiopiancoupleApi(){
    try {
        return  fetch(ETHIOPIAN_COUPLE).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}