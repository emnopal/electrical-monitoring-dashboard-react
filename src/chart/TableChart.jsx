import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

class TabelChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			data: props.data,
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
			});
		}
	}

	convertLocale(str) {
		const parseTimestamp = new Date(str * 1000);
		return parseTimestamp.toLocaleString("id-ID");
	}

	render() {
		return (
			<Table>
				<thead>
					<tr>
						<th>{this.state.title}</th>
						<th>Timestamp</th>
						<th>Readable Timestamp</th>
					</tr>
				</thead>
				<tbody>
					{this.state.data.map((item, index) => (
						<tr key={index}>
							<td>{item[this.state.title]}</td>
							<td>{item["timestamp"]}</td>
							<td>{this.convertLocale(item["timestamp"])}</td>
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
};

export default TabelChart;
