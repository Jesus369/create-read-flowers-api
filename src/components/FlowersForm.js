import React, { Component } from 'react';

const flowerURL = "https://flowers.vapor.cloud/flower"

export class FlowersForm extends Component{

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = ({
      title : ''
    })
  }

  handleSubmit(event) {
    fetch('https://flowers.vapor.cloud/flower', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-type" : "application/json; charset=UTF-8"
      }
    })
    event.preventDefault()
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({
      [name] : value
    })
    console.log(this.state)
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <input placeholder="Name" name="name" type="text"/>
          <input placeholder="Description" name="description" type="text"/>
          <input placeholder="imageURL" name="imageURL" type="text"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
