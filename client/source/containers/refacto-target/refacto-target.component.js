import React, { PureComponent, PropTypes } from 'react';
import styles from './style.css';

export default class RefactoTarget extends PureComponent {
  state = {
    buttonMarginLeft: 'Opx',
    buttonMarginTop: 'Opx',
    displayTextBubble: false,
  };

  getRandomMargin = () => Math.floor((Math.random() * 400) + 1);

  blink = () => {
    this.setState({
      buttonMarginLeft: `${this.getRandomMargin()}px`,
      buttonMarginTop: `${this.getRandomMargin()}px`,
    });
  };

  StopIt = () => {
    this.setState({ displayTextBubble: true });
    this.props.doStuff('Nice catch!');
    setTimeout(() => {
      this.props.doSomething();
      this.setState({ displayTextBubble: false });
    }, 2000);
  };

  render() {
    return (
      <div className={styles.container}>
        {this.props.main}
        <div className={styles.buttonContainer}>
          <div
            className={styles.buttonWrapper}
            style={{
              marginLeft: this.state.buttonMarginLeft,
              marginTop: this.state.buttonMarginTop,
            }}
            onMouseOver={this.blink}
          >
            <button onClick={this.StopIt} className={styles.mainButton}>
              Main Button
              {this.state.displayTextBubble && (
                <div className={styles.textBubble}>Stop It !</div>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

RefactoTarget.propTypes = {
  doStuff: PropTypes.func.isRequired,
  doSomething: PropTypes.func.isRequired,
  main: PropTypes.string.isRequired,
};
