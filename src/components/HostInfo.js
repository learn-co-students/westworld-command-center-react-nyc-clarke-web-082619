import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'



class HostInfo extends Component {
  state = {
    options: this.props.areas.map(area => {
      return(
        {
          key: area.name,
          text: area.name.split('_').map(name=> name.charAt(0).toUpperCase()+name.slice(1)).join(' '),
          value: area.name
        }
      )
    }),
    value: this.props.area
  }


  handleChange = (e, {value}) => {
    this.props.changeLand(this.props.id, value);
    this.setState({
      value: value
    })
}

  toggle = () => {
    console.log("The radio button fired");
    this.props.changeActive(this.props.id, this.props.active)
  }

  render(){
    // console.log(this.state.value);
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={ this.props.imageUrl }
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.firstName} | { this.props.gender==='Male' ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.props.active ? "Active" : "Decommissioned"}
                  checked={this.props.active? true : false}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.props.area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
