import React, { Component } from 'react';

class Effect extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mouseHover: false,
      };
    }
  
    handleMouseEnter = () => {
      this.setState({ mouseHover: true });
    };
  
    handleMouseLeave = () => {
      this.setState({ mouseHover: false });
    };
  
    render() {
      const divStyle = {
        backgroundColor: this.state.mouseHover ? 'lightblue' : 'white',
        boxShadow: this.state.mouseHover ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
      };
  
      return (
        <div
          className={this.props.className} 
          style={divStyle}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {this.props.children}
        </div>
      );
    }
  }
  
  export default Effect;