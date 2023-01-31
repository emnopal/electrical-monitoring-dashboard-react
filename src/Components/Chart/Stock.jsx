import React, {Component} from "react";
import PropTypes from "prop-types";
import * as Highcharts from "highcharts/highstock";

class Stock extends Component {
    componentDidMount() {
        this.createStockChart();
    }

    componentDidUpdate() {
        this.createStockChart();
    }

    createStockChart() {
        let bgColor, textColor;

        if (this.props.theme === 'dark') {
            bgColor = "#121212FF"
            textColor = "#FFFFFFFF"
        } else {
            bgColor = "#FFFDFDFF"
            textColor = "#000000FF"
        }

        let formatData = [];
        formatData = this.props.data
            .map((obj) => {
                const dateInSeconds = new Date(
                    (parseInt(obj["timestamp"]) + (3600 * 7)) * 1000, // currently use manual to convert UTC to UTC+7
                ).getTime();
                return [dateInSeconds, obj[this.props.title]];
            })
            .reverse();

        Highcharts.stockChart("chart", {

            chart: {
                backgroundColor: bgColor,
            },

            rangeSelector: {
                selected: 1,
            },

            title: {
                text: this.props.title,
                style: {
                    color: textColor,
                }
            },

            series: [
                {
                    name: this.props.title,
                    data: formatData,
                    marker: {
                        enabled: true,
                        radius: 3,
                    },
                    tooltip: {
                        valueDecimals: 2,
                    },
                },
            ],
        });
    }

    render() {
        return <div id="chart">Highstock</div>;
    }
}

Stock.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
};

export default Stock;
