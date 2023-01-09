import React, { Component } from 'react';
import { hubStock as hubData } from './data/hubStock';
import { googStock as googData } from './data/googStock';
import ChartHighstock from './chart/ChartHighstock';
import * as _ from 'lodash';
import './App.css';
import AreaChart from "./chart/AreaChart";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import StatisticsChart from "./chart/StatisticsChart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 3,
      data: _.cloneDeep(googData),
      title: 'Price'
    };
    this.currentSelected = this.currentSelected.bind(this);
    this.energySelected = this.energySelected.bind(this);
    this.priceSelected = this.priceSelected.bind(this);
  }

  energySelected() {
    this.setState({
      selected: 1,
      data: _.cloneDeep(googData),
      title: 'Energy'
    });
  }

  currentSelected() {
    this.setState({
      selected: 2,
      data: _.cloneDeep(hubData),
      title: 'Current'
    });
  }

  priceSelected() {
    this.setState({
      selected: 3,
      data: _.cloneDeep(googData),
      title: 'Price'
    });
  }



  render() {
    return (
      <div className="App">
        <Container>
            <Container>
                <h1>Gatau ini apaan</h1>
            </Container>
            <Nav>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 1 ? 'active' : '')} onClick={this.energySelected}>Energy</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 2 ? 'active' : '')} onClick={this.currentSelected}>Current</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 3 ? 'active' : '')} onClick={this.priceSelected}>Price</Button>
            </Nav>
            <br/>
            <Container>
                <StatisticsChart title={this.state.title} />
                <AreaChart data={this.state.data} title={this.state.title} />
                <ChartHighstock data={this.state.data} title={this.state.title} />
            </Container>
        </Container>
      </div>
    );
  }
}

export default App;
