import React, {Component} from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString(),
        });
    }

    render() {
        return (
            <span className="App-clock">
                Current datetime: {this.state.time}
            </span>
        )
    }
}

export default Clock;
