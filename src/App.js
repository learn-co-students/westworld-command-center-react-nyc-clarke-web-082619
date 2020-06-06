import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap.js';
import Headquarters from './components/Headquarters';


class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  state = {
    hosts: [],
    areas: [],
    selected: null
  }

  componentDidMount(){
    fetch('http://localhost:3000/hosts')
    .then(resp=> resp.json())
    .then(data=> {
      this.setState({
        hosts: data
      })
    })

    fetch('http://localhost:3000/areas')
    .then(resp=> resp.json())
    .then(data=> {
      this.setState({
        areas: data
      })
    })
  }

  // belowLimit = (value) => {
  //   let currentArea = this.state.areas.find(area => area.name===value);
  //   let limit = currentArea.limit;
  //   console.log(limit);
  //   let peopleInArea = this.state.hosts.filter(host => host.area === value);
  //   console.log(peopleInArea);
  //   if(peopleInArea.length < limit){
  //     return true
  //   }else{
  //     return false
  //   }
  // }

  changeLand = (id, value) => {

    let newHosts = this.state.hosts.map( host => {
      if(host.id === id && value !== host.area){
          return({...host, area: value})
      }else{
        return host
      }
    })
    this.setState({
      hosts: newHosts
    })
  }

  changeActive = (id, value) => {
    let newHosts = this.state.hosts.map( host => {
      if(host.id === id){
        return({...host, active: !value})
      }else{
        return host
      }
    })
    this.setState({
      hosts: newHosts
    }) 
  }

  ifSelected = (id) => {
    this.setState({
      selected: id
    })
  }

  render(){
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap hosts={this.state.hosts} 
            areas={this.state.areas}
            ifSelected={this.ifSelected}
            selected={this.state.selected}
            />
        <Headquarters hosts={this.state.hosts} 
                      areas={this.state.areas} 
                      changeLand={this.changeLand}
                      changeActive={this.changeActive}
                      ifSelected={this.ifSelected}
                      selected={this.state.selected}
                      />
      </Segment>
    )
  }
}

export default App;
