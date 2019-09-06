import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App.js'

afterEach(rtl.cleanup);

it('renders "Womens World Cup" text', () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByText(/Womens World Cup/i));
});
