import inlineStyles from './refacto-target.style';
import React, { Component, PropTypes } from 'react';

export default class RefactoTarget extends Component {

  state = {
    buttonMarginLeft: '0px',
    buttonMarginTop: '0px',
    displayTextBubble: false,
  }

  getRandomMargin = () => (
    Math.floor((Math.random() * 400) + 1)
  )
  blink = () => {
    this.setState({
      buttonMarginLeft: `${this.getRandomMargin()}px`,
      buttonMarginTop: `${this.getRandomMargin()}px`,
    });
  }

  StopIt = () => {
    this.setState({ displayTextBubble: true });
    this.props.mainActions.doStuff('Nice catch!');
    setTimeout(() => {
      this.props.mainActions.doSomething();
      this.setState({ displayTextBubble: false });
    }, 2000);
  }


  render() {
    return (
      <div style={inlineStyles.container}>
        {this.props.main}
        <div style={inlineStyles.buttonContainer}>
          <div
            style={Object.assign(
              {},
              inlineStyles.buttonWrapper,
              {
                marginLeft: this.state.buttonMarginLeft,
                marginTop: this.state.buttonMarginTop,
              },
            )}
            onMouseOver={this.blink}
          >
            <button
              onClick={this.StopIt}
              style={inlineStyles.mainButton}
            >
              Main Button
              { this.state.displayTextBubble ?
                (<div style={inlineStyles.textBubble}>
                  Stop It !
                  <div style={inlineStyles.bubbleBinder}>
                    { }
                  </div>
                </div>)
                : (null)
              }
            </button>
          </div>
        </div>
      </div>
    );
  }
}

RefactoTarget.propTypes = {
  mainActions: PropTypes.shape({
    doStuff: PropTypes.func.isRequired,
    doSomething: PropTypes.func.isRequired,
  }),
  main: PropTypes.string.isRequired,
};
