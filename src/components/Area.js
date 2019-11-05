import React from 'react';
import '../stylesheets/Area.css';
import Host from './Host';

const Area = (props) => (
  <div className='area' id={props.id}>
    <h3 className='labels'>{props.name}</h3>
    { 
      props.hosts.filter(host=> host.area===props.id).map((host,i)=>{
        if(host.active === true){
          return <Host {...host} key={i} ifSelected={props.ifSelected}/>
        }
      })
    }
  </div>
)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
