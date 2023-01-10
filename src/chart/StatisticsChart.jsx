import React, {Component} from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class StatisticsChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            data: props.data,
            highest: this.sortObj(props.data, props.title)[0][props.title],
            lowest: this.sortObj(props.data, props.title, "desc")[0][props.title],
            timeHighest: this.convertLocale(this.sortObj(props.data, props.title)[0]["timestamp"]),
            timeLowest: this.convertLocale(this.sortObj(props.data, props.title, "desc")[0]["timestamp"]),
            mean: this.findMean(props.data, props.title),
            median: this.findMedian(props.data, props.title),
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.title !== this.props.title && prevProps.data !== this.props.data) {
            this.setState({
                title: this.props.title,
                data: this.props.data,
                highest: this.sortObj(this.props.data, this.props.title)[0][this.props.title],
                lowest: this.sortObj(this.props.data, this.props.title, "desc")[0][this.props.title],
                timeHighest: this.convertLocale(this.sortObj(this.props.data, this.props.title)[0]["timestamp"]),
                timeLowest: this.convertLocale(this.sortObj(this.props.data, this.props.title, "desc")[0]["timestamp"]),
                mean: this.findMean(this.props.data, this.props.title),
                median: this.findMedian(this.props.data, this.props.title),
            });
        }
    }

    sortObj(data, key, order) {
        const dataCopy = [...data]
        let xMult = 1;
        let yMult = -1;
        if (order === 'desc') {
            xMult = -1;
            yMult = 1;
        }
        return dataCopy.sort((a, b) => a[key] < b[key] ? xMult : yMult);
    }

    convertLocale(str) {
        const parseTimestamp = new Date(str * 1000);
        return parseTimestamp.toLocaleString("id-ID");
    }

    findMean(data, key) {
        const dataCopy = [...data];
        const {length} = dataCopy;
        return dataCopy.reduce((arr, val) => {
            return arr + (val[key] / length);
        }, 0);
    };

    getArrFromObj(data, key) {
        return this.sortObj(data, key).map((a) => a[key]);
    }

    findMedian(data, key) {
        const arrData = this.getArrFromObj(data, key);
        const middle = (arrData.length + 1) / 2;

        const isEven = arrData.length % 2 === 0;
        return isEven ? (arrData[middle - 1.5]
            + arrData[middle - 0.5]) / 2 :
            arrData[middle - 1];
    }

    render() {
        return (
            <Row>
                <Col>
                    <h6>
                        Highest {this.state.title}: {this.state.highest} ({this.state.timeHighest})
                    </h6>
                    <h6>
                        Lowest {this.state.title}: {this.state.lowest} ({this.state.timeLowest})
                    </h6>
                </Col>
                <Col>
                    <h6>
                        Mean {this.state.title}: {this.state.mean}
                    </h6>
                    <h6>
                        Median {this.state.title}: {this.state.median}
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
