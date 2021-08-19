import React, { useContext } from 'react';
import { If, Else, Then } from 'react-if';
import { AuthContext } from './context/auth';
import SettingProvider from './context/settingContext.js';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import ToDo from './components/todo.js';
import Header from './components/Header';
import SettingsForm from './components/settingsForm';
import Auth from './components/Auth';
import Login from './components/Login';
// import AuthProvider from './context/auth';
import SignUp from './components/signup';
import NavBar from './components/navigation';



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


function App() {

  const contextType = useContext(AuthContext);


  return (
    <>
      <NavBar />
      <If condition={contextType.loggedIn}>
        <Then>
          <Router>

            <Header />
            <Switch>
              <SettingProvider>
                <Route exact path='/settings' >
                  <SettingsForm />
                </Route>
                <Route exact path='/'>
                  <SignUp />
                  <Login />
                  <EditLink />
                  <DeleteLink />
                  <ToDo />
                </Route>
              </SettingProvider>
            </Switch>
          </Router>
        </Then>
        <Else>
          <div></div>
        </Else>
      </If>
    </>
  )
}

export default App


