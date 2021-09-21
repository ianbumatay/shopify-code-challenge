//import logo from './logo.svg'; 
import React, {Component} from 'react'; 
//import PhotoContainer from './photoContainer' 
import Photo from './photo'
import './App.css';

class App extends Component {  

  constructor(){
    super()
    this.state = {
      photo: " ",
  }
} 

componentDidMount(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=N21lhOfF1e8Gbb6gW0rU0PiRgIXm9HVY8YroCRFp") 
    .then(resp => resp.json()) 
    .then(data => {
      this.setState({ photo: data }) 
  })
}
  
  

  render(){ 
    return (
      <div className="App"> 
        <p>Test</p> 
        {/* <PhotoContainer photos={this.state.photos}/>    */}
        <Photo photo={this.state.photo} title={this.state.photo.title} explanation={this.state.photo.explanation} date={this.state.photo.date}/> 
        {/* <section>
                <img src={this.state.photo.url} alt="giant orange ball"/>
        </section> */}
      </div>
    );

  }
  
}

export default App;
