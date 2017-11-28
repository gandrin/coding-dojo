import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MainActions from '../../actions/main';
import RefactoTarget from './toto.component';

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
