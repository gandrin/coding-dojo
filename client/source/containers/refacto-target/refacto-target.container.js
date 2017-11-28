import { connect } from 'react-redux';
import RefactoTarget from './refacto-target.component.js';

import * as mainActions from '../../actions/main';


function mapStateToProps(state) {
  return {
    main: state.main,
  };
}


export default connect(mapStateToProps, mainActions)(RefactoTarget);
