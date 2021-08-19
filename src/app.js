import React from 'react';
import SettingProvider from './context/settingContext.js';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import ToDo from './components/todo.js';
import Header from './components/Header';
import SettingsForm from './components/settingsForm';

function App() {
  return (
    <Router>
    <Header />
    <Switch>
      <SettingProvider>
        <Route exact path='/settings' >
          <SettingsForm />
        </Route>
        <Route exact path='/'>
          <ToDo />
        </Route>
      </SettingProvider>
    </Switch>
  </Router>
  )
}

export default App

  
