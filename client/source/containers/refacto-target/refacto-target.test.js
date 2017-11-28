import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { RefactoTarget } from './index';

describe.only('[Snapshot] RefactoTarget', () => {
  const props = {
    mainActions: {
      doStuff: jest.mock(),
      doSomething: jest.mock()
    },
    main: 'toto'
  };

    const container = renderer.create(<RefactoTarget {...props} />);
    it('should match snapshot :', () => {
      expect(container.toJSON()).toMatchSnapshot();
    });
});
