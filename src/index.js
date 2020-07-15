import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store.js';
import IPView from './IPView.js';
import { BrowserRouter } from 'react-router-dom'
const rootDiv = document.getElementById('root');

const comp =
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <Provider store={store}>
      
    <BrowserRouter>
      <IPView />
    </BrowserRouter>
    </Provider>
    <div className={'btn-padding'}>
      <button onClick={reloadComponent}>Reload Component</button>
    </div>
  </div>;

render(comp, rootDiv);

function reloadComponent() {
  ReactDOM.unmountComponentAtNode(rootDiv);
  // adding a slight delay so that reloading is noticeable!
  setTimeout(() => render(comp, rootDiv), 50);
}