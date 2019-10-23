import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application/Application';

it('renders without crashing', function() {
  const div = document.createElement('div');
  ReactDOM.render(<Application />, div);
  ReactDOM.unmountComponentAtNode(div);
});
