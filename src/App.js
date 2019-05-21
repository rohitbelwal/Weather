import React, { Component } from 'react';
import './App.css';
import { async } from 'q';
var apikey="5c8f256338798cfb853d99cac52df526";

class App extends Component {
  
  state={
    temp:"",
    humidity:"",
    image:"",
    city:"",
    country:""
  }

  handleChange(value) {
    this.setState({
        city: value        
    });
}
handleChange1(value) {
  this.setState({      
      country:value
  });
}

 
handleClick=async(e)=>{ 
  const city=this.state.city
  const country=this.state.country
  
  e.preventDefault();
  const api=await fetch("http://api.openweathermap.org/data/2.5/weather?q=city,country&APPID=5c8f256338798cfb853d99cac52df526");
  const rtn=await api.json();
  console.log(rtn);


    this.setState({
    temp:rtn.main.temp,
    humidity:rtn.main.humidity

  });
}

  



  render() {
    return (
      <div className="container" id="root">
      <center>
        <div className="card" id="card1">
        
<input type="text" placeholder="enter city" name="city" className="usercontrol" onChange={(event) =>this.handleChange(event.target.value)}/><br></br>
<input type="text" placeholder="enter country" name="city" className="usercontrol" onChange={(event) =>this.handleChange1(event.target.value)}/><br></br>
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
