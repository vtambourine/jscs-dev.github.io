import React from 'react';
import dataStore from './stores/dataStore';
import JscsModel from './models/JscsModel';

if (typeof window.__jscsData !== 'undefined') {
    dataStore.setData(JscsModel.fromJSON(window.__jscsData));
}

var AppView = require('./views/AppView');

React.render(<AppView />, document.getElementById('root'));