import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import Clock from "../Other/Clock";
import DarkMode from "../Other/DarkMode";

class Header extends Component {
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
        console.log(this.props)
		return (
        <Container>
            <DarkMode/>
            <h1>Electrical Monitoring Dashboard</h1>
                Note: Time in UTC+7 (Asia/Jakarta)
                <Clock/>
                <br/>
        </Container>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string,
};

export default Header;
