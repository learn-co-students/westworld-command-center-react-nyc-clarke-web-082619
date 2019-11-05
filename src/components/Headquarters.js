import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details';
import ColdStorage from './ColdStorage';
import LogPanel from './LogPanel';


class Headquarters extends Component {

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

          <ColdStorage hosts={this.props.hosts} ifSelected={this.props.ifSelected}/>

        </Grid.Column>
        <Grid.Column width={5}>
          <Details selected={this.props.selected}   
                   hosts={this.props.hosts} 
                   areas={this.props.areas}
                   changeLand={this.props.changeLand}
                   changeActive={this.props.changeActive}
                   />
        </Grid.Column>
        <Grid.Column width={3}>

        <LogPanel />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
