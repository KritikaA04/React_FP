import { BrowserRouter, Route, Link, Switch, Prompt } from "react-router-dom";
import queryString from 'query-string';

export default function AppComponent() {
    return (
        <BrowserRouter>
            <>
                <h1>Welcome to React Session...</h1>
                <nav>
                    <Link style={{ paddingRight: "10px" }} to="/">Home</Link>
                    <Link style={{paddingRight: "10px"}} to="/props">Home with Props</Link>
                    <Link style={{paddingRight: "10px"}} to="/help/10/Mayank">Help</Link>
                    <Link style={{paddingRight: "10px"}} to="/about">About</Link>
                </nav>
                
                <div>
                    <h1>This is the Common Part of the Application</h1>
                    
                    <div style={{ height: "500px", border: "1px solid grey", padding: "20px" }}>
                        <Switch>
                            <Route exact path="/" component={HomeComponent}></Route>
                            <Route exact path="/props" render={() => <HomeWithPropsComponent userName="TechnoFunnel" /> }></Route>
                            <Route exact path="/help/:userId/:userName" component={HelpComponent}></Route>
                            <Route exact path="/about" component={AboutComponent}></Route> 
                            <Route component={PageNotFound}></Route>
                        </Switch>
                    </div>
                    
                    <h2>This is the common footer</h2>                    
                </div>
            </>
        </BrowserRouter>
    )
}

function HomeComponent(props) {
    
    function redirectToHelp() {
        debugger;
        console.log(props);
        props.history.push("/about?userId=10&userName=TechnoFunnel");
        debugger;
    }
    
    return (
        <>
            <h1>This is Home Page</h1>
            <input type="button" value="Redirect to About With Query Params" onClick={redirectToHelp} />
        </>
    )
}

function HomeWithPropsComponent(props) {
    return (
        <>
            {props.userName && <h1>User Name is {props.userName}</h1>}
            <h1>This is Home Page</h1>
        </>
    )
}

function HelpComponent(props) {
    debugger;
    return (
        <>
            <Prompt when={props.match.params.userId == 100} message="Are you Sure, You want to redirect ?" />
            <h1>This is Help Page {props.match.params.userName} {props.match.params.userId}</h1>
        </>
    )
}

function AboutComponent(props) {
    function getObject(inputQueryParam) {
        var keyValuePairs = inputQueryParam.substring(1, inputQueryParam.length).split("&");
        var varObject = {};
        for (var i = 0; i < keyValuePairs.length; i++) {
            var data = inputQueryParam.substring(1, inputQueryParam.length).split("&")[i]
            varObject[data.split("=")[0]] = data.split("=")[1];
        }
        return varObject;
    }
    
    //let params = queryString.parse(props.location.search)
    let params = getObject(props.location.search)
    debugger;
    return (
        <>
            <h1>This is About Page {params.userName}</h1>
        </>
    )
}

function PageNotFound() {
    return (
        <>
            <h1>The URL Specified do not Exists</h1>
        </>
    )
}