import React from 'react';

export default class UpdateCounterComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    
    updateCounter = () => {
        // this.state.counter = this.state.counter + 1
        debugger;
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            this.setState({
                counter: this.state.counter + 2
            }, () => {
                this.setState({
                counter: this.state.counter + 3
                }, () =>{
                    this.setState({
                        counter: this.state.counter + 4
                    })
                })
            })
        })
        // debugger;
        // this.setState({
        //     counter: this.state.counter + 2
        // })
        // debugger;
        // this.setState({
        //     counter: this.state.counter + 3
        // })
        // debugger;
        // this.setState({
        //     counter: this.state.counter + 4
        // })
    }

    updateCounterLoop = () => {
        const currentCounter = this.state.counter % 4 + 1; // 1, 2, 3, 4, 1, 2, 3, 4, ...
        
        this.setState({
            counter: this.state.counter + currentCounter
        });
    }

    render() {
        return (
            <div>
                <h1>The Counter Value is: {this.state.counter}</h1>
                <input type="button" value="Update Counter" onClick={this.updateCounterLoop} />
            </div>
        )
    }
}