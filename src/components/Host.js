import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'
// import { prependOnceListener } from 'cluster';

class Host extends React.Component {

  select = (event) => {

    let div = event.target.parentNode.parentNode.children;

    for(let i=0; i<div.length; i++){
      if(div[i].classList.contains('selected') && (div[i] !== event.target.parentNode)){
        div[i].classList.remove('selected');
      }
    }

    event.target.parentNode.classList.add("selected");
    this.props.ifSelected(this.props.id);
  }
 
  render(){
    return(
      <Card
        className="host"
        onClick={(event)=>this.select(event)}
        image={this.props.imageUrl}
        raised
      />
    )
  }
  
}

export default Host
