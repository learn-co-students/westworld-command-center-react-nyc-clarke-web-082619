import React from 'react';
import { Segment } from 'semantic-ui-react';
// import { prependOnceListener } from 'cluster';
import Area from './Area'


const WestworldMap = (props) => {

  return (
    <Segment id="map" >
      {/* What should we render on the map? */}
      {props.areas.map((area,i)=>{
        let nameArray = area.name.split('_');
        let cleanName = nameArray.map(name => name.charAt(0).toUpperCase()+name.slice(1)).join(' ');
        return(<Area key={i} id={area.name} name={cleanName} limit={area.limit} hosts={props.hosts} ifSelected={props.ifSelected}/>)
      })}
    </Segment>
  )
}

export default WestworldMap
