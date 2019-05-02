// https://hibbard.eu/rails-react-crud-app/

import React from 'react';
import { Route } from 'react-router-dom';
import Editor from './Editor';

const App = () => (
    <div>
        <Route path="/media/:id?" component={Editor} />
    </div>
);

export default App;
