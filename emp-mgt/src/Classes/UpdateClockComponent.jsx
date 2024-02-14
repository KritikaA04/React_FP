import { Component } from "react";

export default class UpdateClockComponent extends Component
{
    rcurrent()
    {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    
    constructor(props)
    {
        super(props);
        this.state = {
            currentTime: this.rcurrent(),
            counter: 0,
            appUser: "Name"
        }

        // setInterval(() => {
        //     this.setState({
        //         currentTime: this.rcurrent()
        //     })
        // },1000)
        // setInterval(() => {
        //     this.setState({
        //         counter: this.state.counter + 10
        //     })
        // },2000)
    }
    // we dont write any code to change the state in the constructor because the obj or state is not fully rendered at this time

    updateValue = (event) =>{
        this.setState({
            appUser: event.target.value
        })
    }
    
    shouldComponentUpdate(nextProps, nextState)
    {
        // if (nextState.counter % 4 == 0) {
        //     return false;
        // }
        return true;
    }
    
    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    render()
    {
        return(
            <div>
                <h2>Enter your Name: </h2> <input type="text" value={this.state.appUser} onChange={this.updateValue}/> <br/>
                <h2>Hi! @ {this.state.appUser}</h2>
                <h2>the current time is: {this.state.currentTime}</h2> 
                <h2>counter: {this.state.counter} </h2> 
                <input type="button" value="update counter" onClick={this.incrementCounter}/>   
            </div>
        )
    }

    componentDidMount()
    {

        setInterval(() => {
            this.setState({
                currentTime: this.rcurrent()
            })
        },1000)
        // setInterval(() => {
        //     this.setState({
        //         counter: this.state.counter + 10
        //     })
        // },2000)
    }
}