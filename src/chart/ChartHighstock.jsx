import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Highcharts from "highcharts/highstock";

class ChartHighstock extends Component {
	componentDidMount() {
		this.createStockChart();
	}

	componentDidUpdate() {
		this.createStockChart();
	}

	createStockChart() {
		let formatData = [];
		formatData = this.props.data
			.map((obj) => {
				const dateInSeconds = new Date(
					(parseInt(obj["timestamp"]) + (3600 * 7)) * 1000, // currently use manual to convert UTC to UTC+7
				).getTime();
				console.log(dateInSeconds)
				return [dateInSeconds, obj[this.props.title]];
			})
			.reverse();

		Highcharts.stockChart("chart", {
			rangeSelector: {
				selected: 1,
			},

			title: {
				text: this.props.title,
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
		// return (
		//     <div>
		//         <div id="chart"/>
		//     </div>
		// )
	}
}

ChartHighstock.propTypes = {
	data: PropTypes.array,
	title: PropTypes.string,
};

export default ChartHighstock;
