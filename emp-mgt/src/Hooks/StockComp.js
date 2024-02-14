// https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI
// https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC 

import { useEffect, useState } from "react";
import axios from "axios";

export default function StockDataComponent() {
    
    var [stockList, setStockList] = useState([]);
    var [stockName, setStockName] = useState("");
    
    function addStockToArray() {
        setStockList([...stockList, stockName])
        setStockName("");
    }
    
    function clearStockList() {
        setStockList([]);
    }
    
    return (
        <div>
            <input type="text" value={stockName} onChange={(event) => setStockName(event.target.value)} />
            <input type="button" value="Add Stock" onClick={addStockToArray} />
            <input type="button" value="Clear Stock" onClick={clearStockList} />
            
            {stockList.map(stockUrl => {
                return (
                    <StockData url={stockUrl}></StockData>
                )
            })}
        </div>
    )
}

export function StockData(props) {
    var [stockDetails, setStockDetails] = useState({});
    var [stockColor, setStockColor] = useState("");
    
    useEffect(() => {
        setInterval(() => {
            axios.get(props.url).then((response) => {
                debugger;
                setStockDetails((oldDetails) => {
                    setStockColor(oldDetails.pricecurrent > response.data.data.pricecurrent ? "red" : "green");
                    return response.data.data
                });
            })
        }, 2000);
    }, []);
    
    return (
        <div style={{ border: "1px solid red", height: "150px", margin: "10px", padding: "10px" }}>
            <h1 style={{ color: stockColor }}>Stock Price for {stockDetails.company} is {stockDetails.pricecurrent ? stockDetails.pricecurrent : 0}</h1>
            <h2>Previous Stock Price for {stockDetails.company} is { stockDetails.priceprevclose }</h2>
        </div>
    )
}