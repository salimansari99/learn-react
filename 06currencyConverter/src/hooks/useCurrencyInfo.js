import { useEffect, useState } from "react"


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/ecc588fe1cce917dea432821/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res["conversion_rates"]);
                setData(res["conversion_rates"])
            })
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;