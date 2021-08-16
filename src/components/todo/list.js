import React, { useContext,useEffect,useState } from 'react';
import { ListContext } from '../../context/listContext';
import { SettingContext } from '../../context/settingsContext';
function TodoList(props) {
  const listContext = useContext(ListContext);
  const settingsContext = useContext(SettingContext);
  const [page,setpage] = useState(0);
  const [list,setList] = useState([]);
  useEffect(()=>{
    if(settingsContext.view){
      setList(listContext.list)
    }else{
      let temp = [];
      temp = listContext.list.filter((item)=>{
        if(!item.complete){
          return(item);
        }
      })
      setList(temp);
    }
  },[])
  useEffect(()=>{
    if(settingsContext.view){
      setList(listContext.list)
    }else{
      let temp = [];
      temp = listContext.list.filter((item)=>{
        if(!item.complete){
          return(item);
        }
      })
      setList(temp);
    }
  },[listContext.list])
  function nextPage(){
    settingsContext.nextpage();
    setpage(page+1);
  }
  function prePage(){
    settingsContext.previouspage();
    setpage(page-1);
  }
  function modifyList(id){
    listContext.toggleComplete(id);
    if(settingsContext.view){
      setList(listContext.list)
    }else{
      let temp = [];
      temp = listContext.list.filter((item)=>{
        if(!item.complete){
          return(item);
        }
      })
      setList(temp);
    }
  }
  return (
    <>
    <ul>
      {list.map((item,idx) => {
        if (idx >= settingsContext.start &&idx <= settingsContext.end) {  
          return (
            <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
            >
              <span onClick={() => modifyList(item._id)}>
                {item.text}
              </span>
            </li>
          )
        }
      })}
    </ul>
    {page>0&&<button onClick={prePage}>prev</button>}
    {!(page==(Math.ceil(listContext.list.length/settingsContext.numberOfItems)-1))&&<button onClick={nextPage}>next</button>}
    {/* <button onClick={()=>{settingsContext.setSettings(null,!settingsContext.view)}}>view</button> */}
    </>
  );
}


export default TodoList;