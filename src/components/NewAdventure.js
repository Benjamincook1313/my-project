import React, { Component } from 'react';
import Save from './Save';

class NewAdventure extends Component {
  constructor(props) {
    super(props)

    this.state = {
    };
  }


  





  render() {
    let {state, city, activity} = this.props
    return (

      <div className="NewAdventure">
        <input type="text"
          placeholder="City/Town"
          onChange={e => this.props.handleCity(e.target.value)}
          value={city}
        />
        <input type="text"
          placeholder="State"
          onChange={e => this.props.handleState(e.target.value)}
          value={state}
        />
        
        <input type="text"
          placeholder="activity"
          onChange={e => this.props.handleActivity(e.target.value)}
          value={activity}
        />
        <Save createNewAdventure={() => this.props.createNewAdventure(city, state, activity)} />

      </div>
    );
  }
}

export default NewAdventure;