import React, { useContext,useEffect,useState } from 'react';
// import { ListContext } from '../../context/listContext';
import { SettingContext } from '../../context/settingsContext';

function SettingsForm() {
    const [settings,setSettings] = useState({items:0,view:false});
    const settingContext = useContext(SettingContext);
    // const listContext = useContext(ListContext);
    useEffect(()=>{
        // console.log('view: ',settingContext.view);
        // console.log('items: ',settingContext.numberOfItems);
    },[settingContext.numberOfItems,settingContext.view])
    function handlesubmit(e){
        e.preventDefault();
        // settingContext.setSettings(settings.items,settings.view);
        let strSettings = JSON.stringify(settings);
        localStorage.setItem('settings',strSettings);
    }

    function handleItemNumber(e){
        setSettings({...settings,[e.target.name]:e.target.value})
    }
    function handleView(e){
        if(e.target.checked){
            setSettings({...settings,[e.target.name]:e.target.checked})
        }else{
            setSettings({...settings,[e.target.name]:e.target.checked})
        }
    }

    return (
        <form onSubmit={handlesubmit}>
            <label>number of items per page</label>
            <input name='items' type='number' placeholder={1} min={1} onChange={handleItemNumber}></input>
            <label>view completed items</label>
            <input name='view' type='checkbox'  onChange={handleView}></input>
            <button type='submit'>submit</button>
        </form>
    )
}

export default SettingsForm