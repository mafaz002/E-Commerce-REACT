import React from 'react';
import './App.css';
import { ItemType } from './components/ItemType/ItemType';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DetailsForm } from './components/DetailsForm/DetailsForm';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'}><ItemType type={'Fashion'} name={'Fashion'} quotes={true} /></Route>
                <Route exact path={'/Electronics'}><ItemType type={'Electronics'} name={'Electronics'} /></Route>
                <Route exact path={'/Checkout'} component={DetailsForm} />
            </Switch>
        </Router>
  );
}

export default App;
