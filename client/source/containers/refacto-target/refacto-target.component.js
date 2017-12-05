import React, { Component, PropTypes } from 'react';
import style from 'refacto-target.style.css';

export default class RefactoTarget extends Component {

  state = {
    buttonMarginLeft: 'Opx',
    buttonMarginTop: 'Opx',
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
  };

  stopIt = () => {
    this.setState({ displayTextBubble: true });
    this.props.mainActions.doStuff('Nice catch!');
    setTimeout(() => {
      this.props.mainActions.doSomething();
      this.setState({ displayTextBubble: false });
    }, 2000);
  };

  render() {
    return (
      <div className={style.container}>
        {this.props.main}
        <div className={style.button_container}>
          <div
            className={style.button_wrapper}
            style={{
              marginLeft: this.state.buttonMarginLeft,
              marginTop: this.state.buttonMarginTop,
            }}
            onMouseOver={this.blink}
          >
            <button
              onClick={this.stopIt}
              className={style.main_button}
            >
              Main Button
              { this.state.displayTextBubble ?
                (<div className={style.text_bubble}>
                  Stop It !
                  <div className={style.bubble_binder}>
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
