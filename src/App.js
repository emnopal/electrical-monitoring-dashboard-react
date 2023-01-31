import React, {Component} from 'react';
import './Style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as _ from 'lodash';
import {child, get} from 'firebase/database';
import dbRef from './Helper/Config/firebaseConfig';
import flattenObj from './Helper/Utils/flattenObj';
import FetchFirebaseDatabase from './Helper/Utils/fetchFirebaseDatabase';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Stock from './Components/Chart/Stock';
import Stats from "./Components/Chart/Stats";
import TabelChart from './Components/Chart/Table';
import Gauge from './Components/Chart/Gauge';
import WelcomePage from './Page/WelcomePage';
import Clock from "./Components/Other/Clock";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            data: _.cloneDeep([]),
            title: 'init',
            theme: localStorage.getItem('theme'),
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

    DarkMode() {
        const setDark = () => {
            localStorage.setItem("theme", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
        };
        const setLight = () => {
            localStorage.setItem("theme", "light");
            document.documentElement.setAttribute("data-theme", "light");
        };

        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

        if (defaultDark) {
            setDark();
        }

        const toggleTheme = (e) => {
            if (e.target.checked) {
                setDark();
                this.setState({
                    theme: "dark",
                });
            } else {
                setLight();
                this.setState({
                    theme: "light",
                });
            }
        };

        return (
            <div className="toggle-theme-wrapper">
                <span role="img" aria-label="light">☀️</span>
                <label className="toggle-theme" htmlFor="checkbox">
                    <input
                        type="checkbox"
                        id="checkbox"
                        onChange={toggleTheme}
                        defaultChecked={defaultDark}
                    />
                    <div className="slider round"></div>
                </label>
                <span role="img" aria-label="dark">🌒</span>
            </div>
        );
    };

    Header(color) {
        return (
            <Container>
                <div className="col-lg-6">
                    <div className="input-group">
                        <span className="input-group-btn">
                            {this.DarkMode()}
                        </span>
                        <span className="input-group-btn" style={{position: "relative", top: "2.5px", left: "120%"}}>
                            <a href="https://github.com/emnopal/electrical-monitoring-dashboard-react" target="_blank"
                               rel="noopener noreferrer">
                                <button className="btn btn-default" type="button" style={{color: color}}>Repository</button>
                            </a>
                            <a href="https://github.com/emnopal" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-default" type="button" style={{color: color}}>Follow my Github</button>
                            </a>
                        </span>
                    </div>
                </div>
                <br/>
                <br/>
                <h1>Electrical Monitoring Dashboard</h1>
                Note: Time in UTC+7 (Asia/Jakarta) (<Clock/>)
            </Container>
        )
    }

    zeroHandlerSelected() {
        return (
            <Container>
                <WelcomePage title={this.state.title}/>
            </Container>
        );
    }

    otherHandlerSelected() {
        return (
            <Container>
                <div className='statHeaders'>
                    <Stats data={this.state.data} title={this.state.title} units={this.state.units} theme={this.state.theme}/>
                    <Gauge data={this.state.data} title={this.state.title} units={this.state.units} theme={this.state.theme}/>
                </div>
                <div>
                    <br/>
                    <Stock data={this.state.data} title={this.state.title} theme={this.state.theme}/>
                    <br/>
                    <TabelChart data={this.state.data} title={this.state.title} units={this.state.units} theme={this.state.theme}/>
                </div>
            </Container>
        );
    }

    buttonHandler() {
        return (
            <Nav className="justify-content-center">
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 0 ? 'active' : '')}
                        onClick={this.zeroSelected}>Home</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 1 ? 'active' : '')}
                        onClick={this.currentSelected}>Current</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 2 ? 'active' : '')}
                        onClick={this.energySelected}>Energy</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 3 ? 'active' : '')}
                        onClick={this.frequencySelected}>Frequency</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 4 ? 'active' : '')}
                        onClick={this.powerFactorSelected}>Power Factor</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 5 ? 'active' : '')}
                        onClick={this.powerSelected}>Power</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 6 ? 'active' : '')}
                        onClick={this.priceSelected}>Total Price</Button>
                <Button type='button' className={"btn btn-highchart " + (this.state.selected === 7 ? 'active' : '')}
                        onClick={this.voltageSelected}>Voltage</Button>
            </Nav>
        )
    }

    render() {
        let conditionalContainer;

        if (this.state.selected === 0) {
            conditionalContainer = this.zeroHandlerSelected();
        } else {
            conditionalContainer = this.otherHandlerSelected();
        }

        let color;

        if(this.state.theme === 'light') {
            color = 'black';
        } else {
            color = 'white';
        }

        const button = this.buttonHandler();
        return (
            <div className="App">
                <Container>
                    <br/>
                    {this.Header(color)}
                    {button}
                    <br/>
                    {conditionalContainer}
                </Container>
            </div>
        )
    }
}

export default App;
