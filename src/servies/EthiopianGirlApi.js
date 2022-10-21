const ETHIOPIAN_GIRL=""
export default function getEhtiopianGirlApi(){
    try {
        return  fetch(ETHIOPIAN_GIRL).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}