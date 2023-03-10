import React, {Component} from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts/highcharts";
import HighchartsMore from "highcharts/highcharts-more.src";
import HighchartsGauge from "highcharts/modules/solid-gauge";
import StatFuncFromArr from "../../Helper/Utils/statFuncFromArr";

HighchartsMore(Highcharts);
HighchartsGauge(Highcharts);

class Gauge extends Component {
    componentDidUpdate() {
        this.createGaugeChart();
    }

    componentDidMount() {
        this.createGaugeChart();
    }

    createGaugeChart() {
        const arrFromObj = this.props.data.map((obj) => obj[this.props.title]);

        let bgColor, textColor;

        if (this.props.theme === 'dark') {
            bgColor = "#121212FF"
            textColor = "#FFFFFFFF"
        } else {
            bgColor = "#FFFDFDFF"
            textColor = "#000000FF"
        }

        Highcharts.chart("gaugeChart", {
            rangeSelector: {
                selected: 1,
            },

            chart: {
                type: "gauge",
                backgroundColor: bgColor,
            },

            title: {
                text: this.props.title,
                style: {
                    color: textColor,
                }
            },

            pane: {
                startAngle: -90,
                endAngle: 90,
                background: null,
                center: ['50%', '75%'],
                size: '100%'
            },

            yAxis: {
                min: Math.min(...arrFromObj),
                max: Math.max(...arrFromObj),
                tickPixelInterval: 72,
                tickPosition: "inside",
                tickColor: bgColor,
                tickLength: 20,
                tickWidth: 2,
                minorTickInterval: null,
                labels: {
                    distance: 20,
                    style: {
                        fontSize: "14px",
                        color: textColor,
                    },
                },
                plotBands: [
                    {
                        from: Math.min(...arrFromObj),
                        to: StatFuncFromArr.findQuantile(arrFromObj, .25),
                        color: "#55BF3B", // green
                        thickness: 20,
                    },
                    {
                        from: StatFuncFromArr.findQuantile(arrFromObj, .25),
                        to: StatFuncFromArr.findQuantile(arrFromObj, .75),
                        color: "#DDDF0D", // yellow
                        thickness: 20,
                    },
                    {
                        from: StatFuncFromArr.findQuantile(arrFromObj, .75),
                        to: Math.max(...arrFromObj),
                        color: "#DF5353", // red
                        thickness: 20,
                    },
                ],
            },

            series: [
                {
                    name: this.props.title,
                    data: [StatFuncFromArr.findMean(arrFromObj)],
                    tooltip: {
                        valueSuffix: " " + this.props.units,
                    },
                    dataLabels: {
                        format: this.props.title === 'Total Price' ? this.props.units + "{y} " : "{y} " + this.props.units,
                        borderWidth: 0,
                        color: textColor,
                        style: {
                            fontSize: "16px",
                        },
                    },
                    dial: {
                        radius: "80%",
                        backgroundColor: "gray",
                        baseWidth: 12,
                        baseLength: "0%",
                        rearLength: "0%",
                    },
                    pivot: {
                        backgroundColor: "gray",
                        radius: 6,
                    },
                },
            ]
        })
    };

    render() {
        return (
            <div>
                <div id="gaugeChart"/>
            </div>
        );
    }
}

Gauge.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    units: PropTypes.string
};

export default Gauge;
