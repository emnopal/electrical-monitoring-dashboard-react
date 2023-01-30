import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

class TabelChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			data: props.data,
			units: props.units
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
				units: this.props.units
			});
		}
	}

	convertLocale(str) {
		const parseTimestamp = new Date(str * 1000);
		return parseTimestamp.toLocaleString("id-ID");
	}

	render() {
		return (
			<Table className="table-light">
				<thead>
					<tr>
						<th className="text-light bg-dark">{this.state.title} (in {this.state.units})</th>
						<th className="text-light bg-dark">Timestamp (s)</th>
						<th className="text-light bg-dark">Readable Timestamp (GMT+7)</th>
					</tr>
				</thead>
				<tbody>
					{this.state.data.map((item, index) => (
						<tr key={index}>
							<td className="text-light bg-dark">
								{this.state.title === 'Total Price' ? `${this.state.units} ` : ''}
								{item[this.state.title]}
								{this.state.title !== 'Total Price' ? ` ${this.state.units}` : ''}
							</td>
							<td className="text-light bg-dark">{item["timestamp"]}</td>
							<td className="text-light bg-dark">{this.convertLocale(item["timestamp"])}</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}
}

TabelChart.propTypes = {
	title: PropTypes.string,
	data: PropTypes.array,
	units: PropTypes.string
};

export default TabelChart;
