import React, { useState } from 'react';

export const SettingContext = React.createContext();

function SettingsContext(props) {

  const [numberOfItems, setNumberOfItems] = useState(3);
  const [view, setView] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(numberOfItems - 1);


  function setSettings(numb, val) {
    if (numb) {
      setNumberOfItems(numb)
    }

    setView(val);

  }

  function nextpage() {
    setStart(start + numberOfItems);
    setEnd(end + numberOfItems);

  }

  function previouspage() {
    setStart(start - numberOfItems);
    setEnd(end - numberOfItems);
  }

  return (
    <SettingContext.Provider value={{ numberOfItems, view, setSettings, start, end, nextpage, previouspage }}>
      {props.children}
    </SettingContext.Provider>
  )
  
}

export default SettingsContext