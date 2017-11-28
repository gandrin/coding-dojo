import cst from '../constants/main';

export const doStuff = sentence => ({ type: cst.DO_STUFF, payload: sentence });
export const doSomething = () => ({ type: cst.DO_SOMETHING });
