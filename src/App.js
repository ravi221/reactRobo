import React, { Component } from 'react';
import './App.css';
import { robots } from './robots';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Login from './login';



class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: robots, 
      searchfield : ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {      
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    /*console.log(JSON.stringify(filteredRobots));
    let isExists = JSON.stringify(filteredRobots).length;
    let test;
    if(JSON.stringify(filteredRobots) === []){
      return <p>No Records</p>;
    }*/
    
    return (
      <div className="tc">
        <h1>Robo Friends</h1>
        <SearchBox searchchange={this.onSearchChange}/>

        <Login />
        <CardList robots={filteredRobots}/>
      </div>
    );  
  }
  
}

export default App;
