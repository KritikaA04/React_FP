import { useState,useEffect } from "react";
import axios from "axios";

export default function StockDataComp()
{
    var [sbiStockPrice,setSbiStockPrice] = useState(0);
    var [stockColor,setStockColor] = useState("green");

    // useEffect(() => {
    //     setInterval(() => {
    //         axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI").then((response) => {
    //             debugger;
    //             // console.log(sbiStockPrice);
    //             // console.log(response.data.data.pricecurrent)
    //             // setSbiStockPrice(response.data.data.pricecurrent)

                                
    //             // if (response.data.data.pricecurrent != sbiStockPrice) {
    //             //     var updatedData = (response.data.data.pricecurrent > sbiStockPrice) ? "green" : "red";
    //             //     debugger;
    //             //     setStockColor(updatedData);
    //             //     setSbiStockPrice(response.data.data.pricecurrent);
    //             // }
                
    //             // setSbiStockPrice((oldSBIPrice) => {
                    
    //             //     if (oldSBIPrice > response.data.data.pricecurrent) {
    //             //         setStockColor("red")
    //             //     }
                    
    //             //     if (oldSBIPrice < response.data.data.pricecurrent) {
    //             //         setStockColor("green")
    //             //     }
                    
    //             //     return response.data.data.pricecurrent
    //             // })

                
    //         })
    //     }, 2000);
    // }, [])

    useEffect(() => {
        setInterval(() => {
            axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI").then((response) => {
                setSbiStockPrice((oldSBIPrice) => {
                    setStockColor(oldSBIPrice > response.data.data.pricecurrent ? "red" : "green");
                    return response.data.data.pricecurrent
                });
            })
        }, 2000);
    }, [])
    

    return(
        <div>
            <h2 style={{color:stockColor}}>SBI Stock Price: {sbiStockPrice}</h2>
        </div>
    )
}