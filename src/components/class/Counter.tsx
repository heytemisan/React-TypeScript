import { Component } from "react";

/** The Count value is 5 */

export class Counter extends Component {
    state = {
        count: 0,
    }

handleClick = () => {
    this.setState((prevState)=> ({count: prevState + 1}))
}

render(){
    return (
        <div>
            <button onClick={this.handleClick}>Increment</button>
            {this.props.message} {this.state.count}
        </div>
    )
}
}
