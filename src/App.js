import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
const flowersAPI = 'https://flowers.vapor.cloud/flowers'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      flowers: []
    }
  }

  componentDidMount() {
    fetch(flowersAPI)
    .then(flowers => flowers.json())
    .then(json =>
    this.setState({
      flowers: json
    }))
    console.log(this.state)
  }
  render() {
    let flowersListing = this.state.flowers.map(function(flower,index){
      return <div key={index+Date.now()} className="flower_container">
                <li>{flower.name}</li>
                <li> <Link to={`/flowers/${flower.name}`}><img className="style_flower_img" src={flower.imageURL}/> </Link> </li>
                <li>{flower.description}</li>
              </div>
    })

    return (
      <div>
        <div className="flower_listings_container">
          {flowersListing}
        </div>
      </div>
    );
  }
}

export default App;
