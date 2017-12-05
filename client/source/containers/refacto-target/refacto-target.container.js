import RefactoTarget from 'refacto-target.component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MainActions from '../../actions/main';

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
