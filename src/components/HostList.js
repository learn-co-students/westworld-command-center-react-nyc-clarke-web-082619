import React from 'react';
import { Card } from 'semantic-ui-react';
// import { prependOnceListener } from 'cluster'
import Host from './Host';

class HostList extends React.Component {


  render(){
    return(
      <Card.Group itemsPerRow={6}>
        {/* What do you think, partner? */}
        {this.props.hosts.map(host => {
          if(host.active === false){
            return(<Host key={host.id} {...host} ifSelected={this.props.ifSelected}/>)
          }
        })}
      </Card.Group>
    )
  }
}

export default HostList
