import React from 'react';
import ListProvider from './context/listContext';
import SettingsProvider from './context/settingsContext';
import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <SettingsProvider>
          <ListProvider>
            <ToDo />
          </ListProvider>
        </SettingsProvider>
      </>
    );
  }
}