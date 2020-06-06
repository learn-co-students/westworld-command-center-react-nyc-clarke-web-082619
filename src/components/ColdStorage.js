import React from 'react';
import { Segment } from 'semantic-ui-react';
import HostList from './HostList';
// import { prependOnceListener } from 'cluster';


class ColdStorage extends React.Component {

  render(){
    return(
      <Segment.Group className="HQComps">
          <Segment compact>
            <h3 className="labels">ColdStorage</h3>
          </Segment>
          <Segment compact>
  
            {/* Cold Storage contains hosts....but how? Directly? Or is there something else we could use to contain them... */}
            <HostList hosts={this.props.hosts} ifSelected={this.props.ifSelected}/>
  
          </Segment>
        </Segment.Group>
    )
  }  
}



export default ColdStorage
