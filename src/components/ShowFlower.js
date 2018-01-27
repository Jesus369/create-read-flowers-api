import React, { Component } from 'react'

export class ShowFlower extends Component{
  render() {
    return (
      <div>
        <h1>{this.props.match.params.flower}</h1>
      </div>
    )
  }
}
