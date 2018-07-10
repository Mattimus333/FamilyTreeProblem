import React from "react"

export class AddButton extends React.Component {

  constructor(props){
    super(props)
    this.state = {isShowingMoreButtons: false}

  }

  render() {
    if(this.state.isShowingMoreButtons){
      return (
        <React.Fragment>
          <button>add parent</button>
          <button>add child</button>
        </React.Fragment>
      )
    } else {
      return (
        <button onClick={this.handlePlusClick}>
          +
        </button>
      );
    }
  }

  handlePlusClick = () => {
    this.setState({isShowingMoreButtons: true})
  }
}
