import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StockDataComp() {
    var [sbiStockPrice, setSbiStockPrice] = useState(0);
    var [stockColor, setStockColor] = useState("green");

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI")
    //             .then((response) => {
    //                 debugger;
    //                 var currentPrice = response.data.data.pricecurrent;
    //                 if (currentPrice != sbiStockPrice) {
    //                     var updatedData = (currentPrice > sbiStockPrice) ? "green" : "red";
    //                     debugger;
    //                     setStockColor(updatedData);
    //                     setSbiStockPrice(currentPrice);
    //                 }
    //             })
    //     }, 1000); 

    //     return () => clearInterval(interval); 
    // }, [sbiStockPrice]); // Adding sbiStockPrice to dependencies array to trigger useEffect when it changes


    useEffect(() => {
        setInterval(() => {
            console.log(sbiStockPrice)
            setSbiStockPrice((sbiStockPrice) => {
                return sbiStockPrice + 1
            });
        }, 2000);
    }, [])
    
    
    useEffect(() => {
        console.log("Cost " + sbiStockPrice)
    })
    
    useEffect(() => {
        
    }, [sbiStockPrice])

    return (
        <div>
            <h2 style={{ color: stockColor }}>SBI Stock Price: {sbiStockPrice}</h2>
        </div>
    );
}