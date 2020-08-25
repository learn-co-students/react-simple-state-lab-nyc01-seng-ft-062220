import React, { Component } from 'react';

 class Cell extends Component {


constructor(props) {
    
    super()
    this.state = {color: props.value} 
  }

   
  handleClick = () => {
    this.setState({
      color: '#333 '
    })
  }
  
  render() {
      return (
          <div  onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}} >
        </div>
      )
  }

}

export default Cell