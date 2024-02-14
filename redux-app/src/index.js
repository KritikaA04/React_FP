import ReactDOM from "react-dom";
import AppComp from "./Components/AppComp";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Reducers/index"

var appStore = createStore(rootReducer)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render((
    <>
        <Provider store={appStore}>
            <AppComp></AppComp>
        </Provider>
    </>
))