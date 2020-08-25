import React from 'react'

class Cell extends React.Component {
        constructor(props){
            super()
            this.state = {
                color: props.value
                //set state here so we can change it in the clickhandler
            }
            console.log(this.state.color)
        }

clickHandler = () => {
    this.setState({
        color: '#333'
     })
     //upon click, we change from the previous state
    }

    render(){
        return (
            <div 
                className="cell"
                style={{backgroundColor: this.state.color}}
                onClick={this.clickHandler}>
          </div>
          //add className cell per instruction so it appears on the dom 
          //this.state.color is returning array of colors
          //upon click, each block of color changes to grey
        )
    }

}

export default Cell