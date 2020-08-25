import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {


  genRow = (vals) => {
    // console.log("vals", vals) //produces each array within data array separately
    // return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
    return vals.map(val => <Cell value={val} />)
  }
  //iterates over color blocks, parses into cell components with value property
  
  genMatrix = () => {
    // console.log("this.props.vals", this.props.values) //produces full array of arrays, uses method above to break into individual elements.
    return this.props.values.map(rowVals => 
      <div className="row">{this.genRow(rowVals)}
      </div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
//if row is not defined, fill in with the color array above
//creates a new array with 10 elements, fills it in with array outlined above.