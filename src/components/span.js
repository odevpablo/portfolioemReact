import React, { Component} from "react";

class Span extends Component{
    constructor(props) {
        super(props);
        this.state = {
          spanVisible: false,
        }
    }

    hadleDivClick = () => {
        this.setState({ spanVisible: !this.state.spanVisible});
    };

    render () {
        return(
        <div onClick={this.handleDivClick}>
        <p>Clique na div para mostrar ou ocultar o span:</p>
        {this.state.spanVisible && <span>{this.props.content}</span>}
      </div>
    );
  }
}

export default Span;