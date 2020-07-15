import {createStore} from 'redux';

import reducer from './reducers/reducer.js';
// import logger from "./middleware/logger.jsx";

const initialState = {
  ips: [
    {ip: '1.2.3.4' , Actor: 'ABC', requestingGroup: 'GAS', dateActive: '21 May 2017, 01:50:30'},
    {ip: '2.3.4.5', Actor: 'SWD', requestingGroup: 'QPOw', dateActive: '20 May 2017, 01:50:36'},
    {ip: '3.4.5.6', Actor: 'QWE', requestingGroup: 'QPOw', dateActive: '20 May 2016, 11:50:26'},
    {ip: '4.5.6.7', Actor: 'QWE', requestingGroup: 'GAS', dateActive: '17 Jan 2016, 08:03:12'},
    {ip: '5.6.7.8', Actor: 'ASD', requestingGroup: 'AQQ', dateActive: '11 Sep 2016 08:03:07'},
    {ip: '67.8.9.3', Actor: 'REWER', requestingGroup: 'AQQ', dateActive: '16 Sep 2016 03:05:37'},
    {ip: '78.9.1.1', Actor: 'SQDS', requestingGroup: 'AQQ', dateActive: '18 Sep 2016 06:03:53'}
  ] 
};

export default createStore(reducer, initialState);