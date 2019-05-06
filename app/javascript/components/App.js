// https://hibbard.eu/rails-react-crud-app/

import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Editor from './Editor';
import createStore from '../store'

const store = createStore();

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/media/:id?" component={Editor} />
        </BrowserRouter>
    </Provider>
);

export default App;
