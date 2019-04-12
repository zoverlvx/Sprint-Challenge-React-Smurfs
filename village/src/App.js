import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
	addToDB = (smurf) => {
		axios.post(
			"https://lambda-school-1-zoverlvx.c9users.io:8080/smurfs",
			smurf
		).then(res => this.setState({smurfs: res.data}))
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
        <SmurfForm addToDB={this.addToDB}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
