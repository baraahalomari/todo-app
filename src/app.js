import React, { useContext } from 'react';
import { If, Else, Then } from 'react-if';
import {AuthContext} from './context/auth';
import ListProvider from './context/listContext';
import SettingsProvider from './context/settingsContext';
import ToDo from './components/todo/todo.js';
import Header from './components/todo/header';
import SettingsForm from './components/todo/settingsForm';
import NavBar from './components/todo/navigation';
import Auth from './components/todo/Auth';
import Login from './components/todo/Login';
// import AuthProvider from './context/auth';
import SignUp from './components/todo/signup';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';


const EditLink = () => {
  return (
    <Auth capability="update">
      <span>Edit</span>
    </Auth>
  );
};

const DeleteLink = () => {
  return (
    <Auth capability="delete">
      <span>Delete</span>
    </Auth>
  );
};

const App = ()=> {
  const contextType  = useContext(AuthContext);
 
    return (
      <>
        <NavBar />    
        <If condition={contextType.loggedIn}>
          <Then>
          <Router>
            <Header />
            <Switch>
              <SettingsProvider>
                <ListProvider>
                  <Route exact path='/'>
                    <SignUp />
                    <Login />
                    <EditLink />
                    <DeleteLink />
                    <ToDo />
                    </Route>
                    <Route exact path='/settings'>
                    <SettingsForm />
                  </Route>
                </ListProvider>]
              </SettingsProvider>
            </Switch>
          </Router> 
          </Then>
          <Else>
            <div></div>
          </Else>
        </If>     
      </>
    );
}


export default App;