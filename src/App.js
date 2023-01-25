import React, { Component } from 'react';
import ChartHighstock from './chart/ChartHighstock';
import * as _ from 'lodash';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import StatisticsChart from "./chart/StatisticsChart";
import TabelChart from './chart/TableChart';
import dbRef from './config/firebaseConfig';
import { get, child } from 'firebase/database';
import flattenObj from './utils/flattenObj';
import FetchFirebaseDatabase from './utils/fetchFirebaseDatabase';
import GaugeChart from './chart/GaugeChart';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
      data: _.cloneDeep([]),
      title: 'init',
    };

    this.zeroSelected = this.zeroSelected.bind(this);
    this.currentSelected = this.keySelected.bind(this, 1, 'Current', 'A');
    this.energySelected = this.keySelected.bind(this, 2, 'Energy', 'J');
    this.frequencySelected = this.keySelected.bind(this, 3, 'Frequency', 'Hz');
    this.powerFactorSelected = this.keySelected.bind(this, 4, 'Power Factor', 'W');
    this.powerSelected = this.keySelected.bind(this, 5, 'Power', 'W');
    this.priceSelected = this.keySelected.bind(this, 6, 'Total Price', 'Rp. ');
    this.voltageSelected = this.keySelected.bind(this, 7, 'Voltage', 'V');

  }

  async keySelected(selected, title, units) {
    const snapshot = await get(child(dbRef, `UsersData/${process.env.REACT_APP_UID}`));
    if (snapshot.exists()) {
      const snapshotFlatten = flattenObj(snapshot.val(), 'array');
      const snapshotHandlerClass = new FetchFirebaseDatabase(snapshotFlatten);
      const data = snapshotHandlerClass.getValueAll([title, 'timestamp'], null, null, 'object');
      this.setState({
        selected: selected,
        data: _.cloneDeep(data),
        title: title,
        units: units,
      });
    }
  }

  zeroSelected() {
    this.setState({
      selected: 0,
      data: null,
      title: null,
    })
  }

  zeroHandlerSelected() {
    return (
        <Container>
            <br/>
            <br/>
            <Container>
                <h1>Electrical Monitoring Dashboard</h1>
                Note: Time in UTC+7 (Asia/Jakarta)
            </Container>
            <br/>
            <Nav className="justify-content-center">
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 0 ? 'active' : '')} onClick={this.zeroSelected}>Home</Button>
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
                <h1>Welcome!</h1>
            </Container>
        </Container>
    );
  }

  otherHandlerSelected() {
    return (
        <Container>
            <br/>
            <br/>
            <Container>
                <h1>Electrical Monitoring Dashboard</h1>
                Note: Time in UTC+7 (Asia/Jakarta)
            </Container>
            <br/>
            <Nav className="justify-content-center">
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 0 ? 'active' : '')} onClick={this.zeroSelected}>Home</Button>
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
              <div className='statHeaders'>
                <StatisticsChart data={this.state.data} title={this.state.title} units={this.state.units}/>
                <GaugeChart data={this.state.data} title={this.state.title} units={this.state.units}/>
              </div>
                <br/>
                <ChartHighstock data={this.state.data} title={this.state.title} />
                <br/>
                <TabelChart data={this.state.data} title={this.state.title} />
            </Container>
        </Container>
    );
  }

  render() {
    let conditionalContainer;
    if(this.state.selected === 0) {
      conditionalContainer = this.zeroHandlerSelected();
    } else {
      conditionalContainer = this.otherHandlerSelected();
    }
    return (
      <div className="App">
        {conditionalContainer}
      </div>
    )
  }
}

export default App;
