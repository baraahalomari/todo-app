import React from 'react';
import ListProvider from './context/listContext';
import SettingsProvider from './context/settingsContext';
import ToDo from './components/todo/todo.js';
import Header from './components/todo/header';
import SettingsForm from './components/todo/settingsForm';

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <>
         <Router>
          <Header />
          <Switch>
            <SettingsProvider>
              <ListProvider>
                <Route exact path='/'>
                  <ToDo />
                </Route>
                <Route exact path='/settings'>
                  <SettingsForm/>
                </Route>
              </ListProvider>]
            </SettingsProvider>
          </Switch>
        </Router>
        
      </>
    );
  }
}