import"./styling.css";

export default function styling() {
    
    var styleObject = {
        color: "red",
        border: "1px solid green",
        padding: "10px"
    }
    
    return (
        <section className="styling" >
            <div>Color should be Green</div>
            <label>This should be red</label>
            <h1 style={{ marginTop: "120px", color: "red", border: "1px solid green", padding: "10px" }}>This is the Header</h1>
            <b style={styleObject}>Lets understand the Concept of Styles</b><br/><br/>
            <div>This is the Main Block</div>
        </section>
    )
}