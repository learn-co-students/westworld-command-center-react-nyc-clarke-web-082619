import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import * as Images from '../services/Images';
import HostInfo from './HostInfo';



const Details = (props) => {

  const renderSomething = () => {

   if(props.selected === null){
    return (<Image size='medium' src={Images.westworldLogo}/>)
   }else{
     let host = props.hosts.filter(host=> host.id===props.selected);

     return (<HostInfo 
                {...host[0]} 
                areas={props.areas} 
                changeLand={props.changeLand} 
                changeActive={props.changeActive}
                />)
   }
  }

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details
