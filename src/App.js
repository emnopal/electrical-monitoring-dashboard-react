import React, { Component } from 'react';
import ChartHighstock from './chart/ChartHighstock';
import * as _ from 'lodash';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import StatisticsChart from "./chart/StatisticsChart";
import TabelChart from './chart/TableChart';
import {current} from './data/current';
import {energy} from './data/energy';
import {frequency} from './data/frequency';
import {power} from './data/power';
import {powerFactor} from './data/powerFactor';
import {price} from './data/price';
import {voltage} from './data/voltage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      data: _.cloneDeep(current),
      title: 'Current'
    };
    this.currentSelected = this.currentSelected.bind(this);
    this.energySelected = this.energySelected.bind(this);
    this.frequencySelected = this.frequencySelected.bind(this);
    this.powerFactorSelected = this.powerFactorSelected.bind(this);
    this.powerSelected = this.powerSelected.bind(this);
    this.priceSelected = this.priceSelected.bind(this);
    this.voltageSelected = this.voltageSelected.bind(this);
  }

  currentSelected() {
    this.setState({
      selected: 1,
      data: _.cloneDeep(current),
      title: 'Current'
    });
  }

  energySelected() {
    this.setState({
      selected: 2,
      data: _.cloneDeep(energy),
      title: 'Energy'
    });
  }

  frequencySelected() {
    this.setState({
      selected: 3,
      data: _.cloneDeep(frequency),
      title: 'Frequency'
    });
  }

  powerFactorSelected() {
    this.setState({
      selected: 4,
      data: _.cloneDeep(powerFactor),
      title: 'Power Factor'
    });
  }

  powerSelected() {
    this.setState({
      selected: 5,
      data: _.cloneDeep(power),
      title: 'Power'
    });
  }

  priceSelected() {
    this.setState({
      selected: 6,
      data: _.cloneDeep(price),
      title: 'Total Price'
    });
  }

  voltageSelected() {
    this.setState({
      selected: 7,
      data: _.cloneDeep(voltage),
      title: 'Voltage'
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
            <Container>
                <h1>Electrical Monitoring Dashboard</h1>
            </Container>
            <Nav>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 1 ? 'active' : '')} onClick={this.currentSelected}>Current</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 2 ? 'active' : '')} onClick={this.energySelected}>Energy</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 3 ? 'active' : '')} onClick={this.frequencySelected}>Frequency</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 4 ? 'active' : '')} onClick={this.powerFactorSelected}>Power Factor</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 5 ? 'active' : '')} onClick={this.powerSelected}>Power</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 6 ? 'active' : '')} onClick={this.priceSelected}>Total Price</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 7 ? 'active' : '')} onClick={this.voltageSelected}>Voltage</Button>
            </Nav>
            <br/>
            <Container>
                <StatisticsChart data={this.state.data} title={this.state.title} />
                <ChartHighstock data={this.state.data} title={this.state.title} />
            </Container>
            <TabelChart data={this.state.data} title={this.state.title} />
        </Container>
      </div>
    );
  }
}

export default App;
