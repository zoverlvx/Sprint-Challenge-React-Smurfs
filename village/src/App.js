import React, { Component } from 'react';
import {Route} from "react-router-dom";
import axios from "axios";
import './App.css';
import Header from "./components/Header";
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
	removeFromDB = (id) => {
		axios.delete(
			`https://lambda-school-1-zoverlvx.c9users.io:8080/smurfs/${id}`
		)
		.then(res => this.setState({smurfs: res.data}))
		.catch(err => console.log(err))
	}
	addToDB = (smurf) => {
		axios.post(
			"https://lambda-school-1-zoverlvx.c9users.io:8080/smurfs",
			smurf
		).then(res => {
			this.setState({smurfs: res.data})
			console.log(this.state);
		})
		.catch(err => console.log(err))
	}
	componentDidMount() {
		axios.get("https://lambda-school-1-zoverlvx.c9users.io:8080/smurfs")
		.then(res => this.setState({smurfs: res.data}))
		.catch((err) => console.log(err))
	}
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
		<Header/>
		<Route
			exact path="/"
			render={() => <Smurfs removeFromDB={this.removeFromDB} smurfs={this.state.smurfs} />}
		/>
		<Route
			exact path="/smurf-form"
			render={() => <SmurfForm addToDB={this.addToDB} />}
		/>
      </div>
    );
  }
}

export default App;
