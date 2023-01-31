import React, {Component} from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";

class Area extends Component {
    componentDidUpdate() {
        this.createAreaChart();
    }

    componentDidMount() {
        this.createAreaChart();
    }

    createAreaChart() {
        let formatData = [];

        formatData = this.props.data
            .map((obj) => {
                const dateInSeconds = new Date(obj["timestamp"] * 1000).getTime();
                return [dateInSeconds, obj[this.props.title]];
            })
            .reverse();

        Highcharts.chart("areaChart", {
            rangeSelector: {
                selected: 1,
            },

            chart: {
                type: "area",
            },

            title: {
                text: this.props.title,
            },

            series: [
                {
                    name: "",
                    data: formatData,
                    tooltip: {
                        valueDecimals: 2,
                    },
                },
            ],

            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        const date = new Date(this.value); // 2009-11-10
                        return date.toLocaleString("id-ID", {
                            year: "numeric",
                            month: "short",
                        });
                    },
                },
            },

            yAxis: {
                title: {
                    text: this.props.title,
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    },
                },
            },

            tooltip: {
                formatter: function () {
                    let tooltip = Highcharts.dateFormat(
                        "%A %b %e, %Y",
                        new Date(this.x),
                    );
                    tooltip += "<br/>" + this.y
                    return tooltip;
                },
            },
        });
    }

    render() {
        return (
            <div>
                <div id="areaChart"/>
            </div>
        );
    }
}

Area.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
};

export default Area;
