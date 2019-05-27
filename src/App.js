import React, { Component } from 'react';
import './App.css';
import { async } from 'q';
var apikey="5c8f256338798cfb853d99cac52df526";

class App extends Component {

  constructor()
  {
    super()
  
  this.state={
    temp:"",
    humidity:"",
    image:"",
    city:"",
    country:""
  }
  this.handleClick=this.handleClick.bind(this)
  this.handleChange=this.handleChange.bind(this)
  this.handleChange1=this.handleChange1.bind(this)
}

  handleChange(event) {
    this.setState({
        city:event.target.value     
    });
}
handleChange1(event) {
  this.setState({      
      country:event.target.value
  });
}

 
handleClick=async(e)=>{ 
  
  e.preventDefault();
    const APPID = "5c8f256338798cfb853d99cac52df526";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=${APPID}`;
    const api=await fetch(url)
    const rtn=await api.json();
   this.setState({
    temp:rtn.main.temp,
    humidity:rtn.main.humidity
   });
  
  console.log(rtn);   

}
  render() {
    return (
      <div className="container" id="root">
      <center>
        <div className="card" id="card1">
        
        <input type="text" value={this.state.city} onChange={this.handleChange} required/><br></br>
        <input type="text" value={this.state.country} onChange={this.handleChange1} required /><br></br>
<button  className="btninfo" onClick={this.handleClick}>Get Wheather</button><br></br>

        
        <h1>Temperature==</h1><h1>{this.state.temp}</h1><br></br>
        <h1>humidity==</h1><h1>{this.state.humidity}</h1>
        </div>
      </center>
        
      </div>
    )
  }
  
}
export default App;
