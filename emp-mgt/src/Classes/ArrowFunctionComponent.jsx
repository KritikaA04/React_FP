import { Component } from "react";

export default class ArrowFunctionComponent extends Component{
    constructor(props)
    {
        debugger;
        super(props);
        this.state = {
            userName: "TechnoFunnel"
        }
    }

    alertData()
    {
        alert(this.state.userName);
    }

    render()
    {
        debugger;
        return (
            <div>
                <input type="button" onClick={this.alertData} value="Click for Alert" />
            </div>
        )
    }
}