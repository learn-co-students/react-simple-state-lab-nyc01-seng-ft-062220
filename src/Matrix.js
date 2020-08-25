import React, { Component } from 'react';
import Cell from './Cell.js';

export default class Matrix extends Component {
 
  
  genRow = (vals) => {
   
    return vals.map(val => <div className="cell">{<Cell value={val}/>}</div>) 
  }
  
  genMatrix = () => { 
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  
  render() {
    return (
      
      <div id="matrix">
        {this.genMatrix()}
        
      </div>
    )
  }
  
}
Matrix.defaultPros = {values: ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],}