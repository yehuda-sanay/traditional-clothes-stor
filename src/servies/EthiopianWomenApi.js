const ETHIOPIAN_WOMEN="https://my-json-server.typicode.com/yehuda-sanay/ethiopian-clothing/women"
async function getEhtiopianWomenApi(){
try {return await fetch(ETHIOPIAN_WOMEN)
    .then(res=>res.json())
} catch (error) {alert(error)
    
}
}

export default getEhtiopianWomenApi;