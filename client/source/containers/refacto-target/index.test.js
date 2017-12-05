import React from 'react';
import renderer from 'react-test-renderer';

import { RefactoTarget } from './index';

describe('[Containers] <RefactoTarget />', () => {
  const props = {
    mainActions: {
      doStuff: () => {},
      doSomething: () => {},
    },
    main: 'BONJOUR',
  };
  const refactoTarget = renderer.create(<RefactoTarget {...props} />);
  expect(refactoTarget.toJSON()).toMatchSnapshot();
});
