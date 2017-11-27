import cst from '../constants/main';

export const doStuff = token => ({ type: cst.DO_STUFF, payload: token });
export const doSomething = () => ({ type: cst.DO_SOMETHING });
