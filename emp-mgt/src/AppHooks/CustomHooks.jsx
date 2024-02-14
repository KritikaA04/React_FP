import { useState, useEffect } from "react";
import axios from "axios";

export default function StockData() {
    var nalcoPrice = usePrice("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC");
    var sbiPrice = usePrice("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI");
    return (
        <>
            <h1>The SBi Stock Price is: {sbiPrice}</h1>
            <h1>The NLC Stock Price is: {nalcoPrice}</h1>
        </>
    ) 
}


function usePrice(stockUrl) 
{
    var [stockPrice, setStockPrice] = useState(0);
    
    useEffect(() =>{
        setInterval(() =>{
            axios.get(stockUrl).then((response) =>{
            setStockPrice(response.data.data.pricecurrent)
            })
            },1000)
    },[])

    return stockPrice;
}













// import { useState,useEffect } from "react";
// import axios from "axios";

// export default function StockData(){
//     var [stockPrice, setStockPrice] = useState(0);

//     useEffect(() => {
//         setInterval(() =>{
//             axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI").then((response) =>{
//                 setStockPrice(response.data.data.pricecurrent)
//             })
//         },1000)
//     },[])

//     return (
//         <>
//             <h2>price: {stockPrice}</h2>
//         </>
//     )
// }