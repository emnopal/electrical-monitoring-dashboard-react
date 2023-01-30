import React, {Component} from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";

class BarChart extends Component {
    componentDidUpdate() {
        this.createBarChart();
    }

    componentDidMount() {
        this.createBarChart();
    }

    createBarChart() {
        Highcharts.chart("barChart",{
            rangeSelector: {
                selected: 1,
            },

            chart: {
                type: "bar"
            },

            title: {
                text: this.props.title
            },

            series: [
                {
                    name: "",
                    data: [1, 3, 4, 10, 9],
                    tooltip: {
                        valueDecimals: 2
                    }
                }
            ]
        });
    }

    render() {
        return (
            <div>
                <div id="barChart" />
            </div>
        );
    }
}

BarChart.propTypes = {
    title: PropTypes.string,
}

export default BarChart;