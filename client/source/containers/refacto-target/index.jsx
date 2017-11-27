import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MainActions from '../../actions/main';


const inlineStyles = {
  container: {
    margin: '10px',
  },
  mainButton: {
    padding: '5px',
  },
};

class RefactoTarget extends Component {
  render() {
    return (
      <div style={inlineStyles.container}>
        <button style={inlineStyles.mainButton}> Main Button </button>
      </div>
    );
  }
}

RefactoTarget.propTypes = {
  mainActions: PropTypes.shape({
    doStuff: PropTypes.func.isRequired,
    doSomething: PropTypes.func.isRequired,
  }),
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
