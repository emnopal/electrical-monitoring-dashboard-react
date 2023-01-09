import React, {Component} from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class StatisticsChart extends Component {

    constructor(props) {
        super(props);
        this.state = { title: props.title };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.title !== this.props.title) {
            this.setState({
                title: this.props.title,
            });
        }
    }

    render() {
        return (
            <Row>
                <Col>
                    <h6>
                        Highest {this.state.title}: Data
                    </h6>
                    <h6>
                        Lowest {this.state.title}: Data
                    </h6>
                </Col>
                <Col>
                    <h6>
                        Mean {this.state.title}: Data
                    </h6>
                    <h6>
                        Median {this.state.title}: Data
                    </h6>
                </Col>
                <Col>
                    <h6>
                        Time Highest {this.state.title}: Data
                    </h6>
                    <h6>
                        Time Lowest {this.state.title}: Data
                    </h6>
                </Col>
            </Row>
        );
    }
}

StatisticsChart.propTypes = {
    title: PropTypes.string,
}

export default StatisticsChart;