import React, {Component} from "react";
import PropTypes from "prop-types";
import StatFuncFromObj from "../utils/statFuncFromObj";

class StatisticsChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			data: props.data,
			units: props.units,
			highest: StatFuncFromObj.sortObj(props.data, props.title)[0][props.title],
			lowest: StatFuncFromObj.sortObj(props.data, props.title, "desc")[0][
				props.title
			],
			timeHighest: StatFuncFromObj.convertLocale(
				StatFuncFromObj.sortObj(props.data, props.title)[0]["timestamp"],
			),
			timeLowest: StatFuncFromObj.convertLocale(
				StatFuncFromObj.sortObj(props.data, props.title, "desc")[0]["timestamp"],
			),
			mean: StatFuncFromObj.findMean(props.data, props.title),
			median: StatFuncFromObj.findMedian(props.data, props.title),
			std: StatFuncFromObj.findStd(props.data, props.title),
			latestData: StatFuncFromObj.sortObj(props.data, "timestamp")[0][props.title],
			latestTime: StatFuncFromObj.convertLocale(
				StatFuncFromObj.sortObj(props.data, "timestamp")[0]["timestamp"],
			),
			firstData: StatFuncFromObj.sortObj(props.data, "timestamp", "desc")[0][
				props.title
			],
			firstTime: StatFuncFromObj.convertLocale(
				StatFuncFromObj.sortObj(props.data, "timestamp", "desc")[0]["timestamp"],
			),
		};
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (
			prevProps.title !== this.props.title &&
			prevProps.data !== this.props.data
		) {
			this.setState({
				title: this.props.title,
				data: this.props.data,
				units: this.props.units,
				highest: StatFuncFromObj.sortObj(this.props.data, this.props.title)[0][
					this.props.title
				],
				lowest: StatFuncFromObj.sortObj(
					this.props.data,
					this.props.title,
					"desc",
				)[0][this.props.title],
				timeHighest: StatFuncFromObj.convertLocale(
					StatFuncFromObj.sortObj(this.props.data, this.props.title)[0][
						"timestamp"
					],
				),
				timeLowest: StatFuncFromObj.convertLocale(
					StatFuncFromObj.sortObj(this.props.data, this.props.title, "desc")[0][
						"timestamp"
					],
				),
				mean: StatFuncFromObj.findMean(this.props.data, this.props.title),
				median: StatFuncFromObj.findMedian(this.props.data, this.props.title),
                std: StatFuncFromObj.findStd(this.props.data, this.props.title),
				latestData: StatFuncFromObj.sortObj(this.props.data, "timestamp")[0][
					this.props.title
				],
				latestTime: StatFuncFromObj.convertLocale(
					StatFuncFromObj.sortObj(this.props.data, "timestamp")[0]["timestamp"],
				),
				firstData: StatFuncFromObj.sortObj(
					this.props.data,
					"timestamp",
					"desc",
				)[0][this.props.title],
				firstTime: StatFuncFromObj.convertLocale(
					StatFuncFromObj.sortObj(this.props.data, "timestamp", "desc")[0][
						"timestamp"
					],
				),
			});
		}
	}

	renderOther() {
		return (
			<div>
				<h6>
					Mean {this.state.title}: {this.state.mean}{" "}
					{this.state.units}
				</h6>
				<h6>
					Median {this.state.title}: {this.state.median}{" "}
					{this.state.units}
				</h6>
				<h6>
					Standard Deviation {this.state.title}: {this.state.std}{" "}
					{this.state.units}
				</h6>
				<br />
				<h6>
					Highest {this.state.title}: {this.state.highest}{" "}
					{this.state.units} ({this.state.timeHighest})
				</h6>
				<h6>
					Lowest {this.state.title}: {this.state.lowest}{" "}
					{this.state.units} ({this.state.timeLowest})
				</h6>
				<br />
				<h6>
					Latest Data of {this.state.title}: {this.state.latestData}{" "}
					{this.state.units} ({this.state.latestTime})
				</h6>
				<h6>
					First Data of {this.state.title}: {this.state.firstData}{" "}
					{this.state.units} ({this.state.firstTime})
				</h6>
			</div>
		);
	}

	renderCurrency() {
		return (
			<div>
				<h6>
					Mean {this.state.title}: {this.state.units}
					{this.state.mean}
				</h6>
				<h6>
					Median {this.state.title}: {this.state.units}
					{this.state.median}
				</h6>
				<h6>
					Standard Deviation {this.state.title}: {this.state.units}
					{this.state.std}
				</h6>
				<br />
				<h6>
					Highest {this.state.title}: {this.state.units}
					{this.state.highest} ({this.state.timeHighest})
				</h6>
				<h6>
					Lowest {this.state.title}: {this.state.units}
					{this.state.lowest} ({this.state.timeLowest})
				</h6>
				<br />
				<h6>
					Latest Data of {this.state.title}: {this.state.units}
					{this.state.latestData} ({this.state.latestTime})
				</h6>
				<h6>
					First Data of {this.state.title}: {this.state.units}
					{this.state.firstData} ({this.state.firstTime})
				</h6>
			</div>
		);
	}

	render() {
        let conditionalUnits;
        if(this.state.title === 'Total Price') {
            conditionalUnits = this.renderCurrency();
        } else {
            conditionalUnits = this.renderOther();
        }
		return (
            <div>
                {conditionalUnits}
            </div>
        );
	}
}

StatisticsChart.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    units: PropTypes.string
}

export default StatisticsChart;
