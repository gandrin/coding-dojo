import React, { Component, PropTypes } from 'react';
import styles from './toto.style';

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
  };

  buttonWrapperStyle = (marginLeft, marginTop) =>
    Object.assign({}, styles.buttonWrapper, {
      marginLeft,
      marginTop,
    });

  render() {
    return (
      <div style={styles.container}>
        {this.props.main}
        <div style={styles.buttonContainer}>
          <div
            style={this.buttonWrapperStyle(this.state.buttonMarginLeft, this.state.buttonMarginTop)}
            onMouseOver={this.blink}
          >
            <button
              onClick={this.StopIt}
              style={styles.mainButton}
            >
              Main Button
              { this.state.displayTextBubble ?
                (<div style={styles.textBubble}>
                  Stop It !
                  <div style={styles.bubbleBinder}>
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

