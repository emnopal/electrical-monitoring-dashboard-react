import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

class WelcomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
		};
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (
			prevProps.title !== this.props.title
		) {
			this.setState({
				title: this.props.title
			});
		}
	}

	render() {
		return (
            <Container>
                <h1>Welcome!</h1>
            </Container>
		);
	}
}

WelcomePage.propTypes = {
	title: PropTypes.string,
};

export default WelcomePage;
