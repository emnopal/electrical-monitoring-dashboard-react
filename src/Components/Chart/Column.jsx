import React, {Component} from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";

class Column extends Component {
    componentDidUpdate() {
        this.createColumnChart();
    }

    componentDidMount() {
        this.createColumnChart();
    }

    createColumnChart() {
        Highcharts.chart("columnChart", {
            rangeSelector: {
                selected: 1,
            },

            chart: {
                type: "column"
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
                <div id="columnChart"/>
            </div>
        );
    }
}

Column.propTypes = {
    title: PropTypes.string,
}

export default Column;