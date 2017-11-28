import cst from '../constants/main';

export default function reducer(state = 'Try to catch the button', action) {
  switch (action.type) {
    case cst.DO_STUFF:
      return action.payload;
    case cst.DO_SOMETHING:
      return 'That evil button is back, catch it!';
    default:
      return state;
  }
}
