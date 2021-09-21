//import logo from './logo.svg'; 
import React, {Component} from 'react';
import './App.css';

class App extends Component {  

  constructor(){
    super()
    this.state = {
      photo: []
  }
} 

componentDidMount(){
  fetch("https://api.nasa.gov/planetary/apod?api_key=N21lhOfF1e8Gbb6gW0rU0PiRgIXm9HVY8YroCRFp") 
  .then(resp => resp.json()) 
  .then(data => console.log(data))
}
  
  

  render(){ 
    return (
      <div className="App"> 
      <p>Test</p>
       
      </div>
    );

  }
  
}

export default App;
