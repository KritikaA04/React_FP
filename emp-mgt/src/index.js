import ReactDOM from "react-dom/client";
import  WithoutJSX,{ FirstComponentEquivalant as WithJSX} from "./Components/jsxwork"

// #region 
// import ReactComponent from "./Components/Interpolation";
// import ReactComponent from "./Components/UpdatingProps";
// import ReactComponent from "./Components/styling";
//#endregion

import ReactComponent from "./AppHooks/EmpDetsAPI";

const root = ReactDOM.createRoot(document.getElementById("root"))

//#region 
// root.render(<h2>this is root div rendered</h2>)

// var userName="Kritika"
// var userDesignation="SDE"
//#endregion

var userinfo = {
    name: "Kri",
    designation: "trainee",
    city: "delhi",
    salary: 21,
    arr: [1,2,3],
    obj:{nm:"am",age:22}
}
root.render((
    <>

        {/* <WithoutJSX></WithoutJSX><hr/>
        <WithJSX></WithJSX> */}
        {/* <h1 id="header" className="heading" data-info="some_data"></h1>
        <ReactComponent userName="Mayank" userDesignation="Trainer"></ReactComponent> */}
        {/* <ReactComponent userName={userName} userDesignation={userDesignation}></ReactComponent> */}

        {/* <ReactComponent {...userinfo} > </ReactComponent> */}
        <ReactComponent > </ReactComponent>
    </>)
)

// alert("Welcome aboard!")


// this ... means spreading, it separates the comma separated values, and then enclosing them in {} means making a new obj of it, this 
// makes the values readonly