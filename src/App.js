import React, { Component } from 'react';
import axios from 'axios';
import NewAdventure from './components/NewAdventure.js';
import './App.css';



class App extends Component {
  constructor() {
  super() 

    this.state = {
      adventures: [],
      city: '',
      state: '',
      activity: ''
    };
  
    this.createNewAdventure = this.createNewAdventure.bind(this)
  } 
  componentDidMount() {
    axios.get('/api/adventures').then(res => {
      console.log(res);
      this.setState({
        adventures: res.data
      })
    })
  }

  handleState = (value) =>{
    this.setState({
      state: value
    });
  }

  handleCity = (value) =>{
    this.setState({
      city: value
    });
  }

  handleActivity = (value) =>{
    this.setState({
      activity: value
    });
  }
  
  createNewAdventure(state, city, activity) {
    axios.post('/api/adventures', {state, city, activity}).then((res)=>{
      this.setState({
          adventures: res.data,
          city: '',
          state: '',
          activity: ''
      })
    })
  }
    deleteAdventure(id) {
  axios.delete(`/api/adventures/${id}`).then(res => {
    this.setState({
      adventures: res.data 
    })
  })
}
updateAdventure = (id) => {
  const { city, state, activity } = this.state
  console.log(city, state, activity)
  axios.put(`/api/adventures/${id}`, { city, state, activity }).then ( res => {
    this.setState({
      adventures: res.data,
      city: '',
      state: '',
      activity: ''
    })
  })
}
  render() {

  
    console.log(this.state)
    let advent = this.state.adventures.map((item) => {
      return(
        <div 
        key={item.id}
        
        >
          <h2>{item.activity}</h2>
          <h4>Location: {item.city}, {item.state}</h4>
          <button onClick={() => this.deleteAdventure(item.id)}>delete</button>
          <button onClick={() => this.updateAdventure(item.id)}>edit</button>
          
        </div>
      )
    })
  
    return (

      <div className="App">
      
        <h1>Adventure List</h1>
        
        <NewAdventure 
          createNewAdventure={this.createNewAdventure}
          handleState={this.handleState}
          handleCity={this.handleCity}
          handleActivity={this.handleActivity}
          city={this.state.city}
          state={this.state.state}
          activity={this.state.activity}
        /> 
        
        {advent}
      </div>
    );
  }
}

export default App;
