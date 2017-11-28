import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MainActions from '../../actions/main';


const inlineStyles = {
  container: {
    margin: '10px',
    position: 'relative',
  },
  buttonContainer: {
    height: '100vh',
  },
  buttonWrapper: {
    padding: '40px',
    transition: 'margin 800ms cubic-bezier(0.23, 1, 0.32, 1) 100ms',
  },
  textBubble: {
    position: 'absolute',
    top: '-30px',
    left: '10px',
    fontSize: '15px',
    width: '60px',
    borderRadius: '3px',
    backgroundColor: '#EEE',
  },
  mainButton: {
    padding: '5px',
    position: 'relative',
  },
};

class RefactoTarget extends Component {

  state = {
    buttonMarginLeft: 'Opx',
    buttonMarginTop: 'Opx',
    displayTextBubble: false,
  }

  getRandomMargin = () => (
    Math.floor((Math.random() * 400) + 1)
  )

  render() {
    const blink = () => {
      this.setState({
        buttonMarginLeft: `${this.getRandomMargin()}px`,
        buttonMarginTop: `${this.getRandomMargin()}px`,
      });
    };

    const StopIt = () => {
      this.setState({ displayTextBubble: true });
      this.props.mainActions.doStuff('Nice catch!');
      setTimeout(() => {
        this.props.mainActions.doSomething();
        this.setState({ displayTextBubble: false });
      }, 2000);
    };

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
            onMouseOver={blink}
          >
            <button
              onClick={StopIt}
              style={inlineStyles.mainButton}
            >
              Main Button
              { this.state.displayTextBubble ?
                (<div style={inlineStyles.textBubble}>
                  Stop It !
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

function mapStateToProps(state) {
  return {
    main: state.main,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(MainActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RefactoTarget);
