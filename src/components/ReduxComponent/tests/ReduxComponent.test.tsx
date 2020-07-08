import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../../lib/Redux/Store';
import ReduxComponent from '../ReduxComponent';

test('renders component', () => {
  const store = configureStore();

  const { container } = render(
    <Provider store={store}>
      <ReduxComponent />
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
