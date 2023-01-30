import React, { Component } from 'react';
import { get, child } from 'firebase/database';
import * as _ from 'lodash';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import ChartHighstock from './Components/Chart/ChartHighstock';
import StatisticsChart from "./Components/Chart/StatisticsChart";
import TabelChart from './Components/Chart/TableChart';
import GaugeChart from './Components/Chart/GaugeChart';
import dbRef from './Helper/Config/firebaseConfig';
import flattenObj from './Helper/Utils/flattenObj';
import FetchFirebaseDatabase from './Helper/Utils/fetchFirebaseDatabase';
import WelcomePage from './Components/Pages/WelcomePage';
import Header from './Components/Pages/Header';


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
        <WelcomePage title={this.state.title} />
      </Container>
    );
  }

  otherHandlerSelected() {
    return (
      <Container>
        <div className='statHeaders'>
          <StatisticsChart data={this.state.data} title={this.state.title} units={this.state.units}/>
          <GaugeChart data={this.state.data} title={this.state.title} units={this.state.units}/>
        </div>
        <div>
          <br/>
          <ChartHighstock data={this.state.data} title={this.state.title} />
          <br/>
          <TabelChart data={this.state.data} title={this.state.title} units={this.state.units} />
        </div>
      </Container>
    );
  }

  buttonHandler() {
    return (
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
    )
  }

  render() {
    let conditionalContainer;
    if(this.state.selected === 0) {
      conditionalContainer = this.zeroHandlerSelected();
    } else {
      conditionalContainer = this.otherHandlerSelected();
    }
    const button = this.buttonHandler();
    return (
      <div className="App">
        <Container>
          <br/>
          <br/>
          <Header title={this.state.title}/>
          <br/>
            {button}
          <br/>
          {conditionalContainer}
        </Container>
      </div>
    )
  }
}

export default App;
