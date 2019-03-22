import React, { Component } from "react";
import "./App.css";
import Starwars from "./components/Starwars";
import Pagination from "./components/Pagination";
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: null,
      previous: null
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Pagination nextPage={this.state.next} prevPage={this.state.previous} />
        <Starwars starwarsCast={this.state.starwarsChars} />
        <Pagination nextPage={this.state.next} prevPage={this.state.previous} />
      </div>
    );
  }
}

export default App;
