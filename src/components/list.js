import React, { useState, useContext, useEffect } from 'react'
import { settingContext } from '../context/settingContext.js';
import { Badge,CloseButton , Card} from 'react-bootstrap';

function List(props) {

    const settingsContext = useContext(settingContext);
    const [activeList, setActiveList] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [numOfPages, setNumOfPages] = useState(Math.ceil(props.list.length / settingsContext.itemPerPage));


    useEffect(() => {
        let start = (activePage - 1) * settingsContext.itemPerPage;
        let end = start + settingsContext.itemPerPage;

        setNumOfPages(Math.ceil(props.list.length / settingsContext.itemPerPage));
        setActiveList(props.list.slice(start, end));
    }, [props.list.length]);


    useEffect(() => {
        if (settingsContext.showCompleted) {
            let start = (activePage - 1) * settingsContext.itemPerPage;
            let end = start + settingsContext.itemPerPage;
            setActiveList(props.list.slice(start, end));
            setNumOfPages(Math.ceil(props.list.length / settingsContext.itemPerPage));
        } else {
            let temp = props.list.filter((item) => {
                return item.complete === false
            })

            let start = (activePage - 1) * settingsContext.itemPerPage;
            let end = start + settingsContext.itemPerPage;
            setActiveList(temp.slice(start, end));
            setNumOfPages(Math.ceil(temp.length / settingsContext.itemPerPage))
        }
    }, [activePage, settingsContext.showCompleted]);



    function changeActivePage(num) {

        setActivePage(num);
    }


    // function toggleView() {

    //     settingsContext.setShowCompleted(!settingsContext.showCompleted);
    // }


    const pages = () => {
        let page = [];

        for (let i = 1; i <= numOfPages; i++) {
            page.push(<button onClick={() => { changeActivePage(i) }} key={i}>{i}</button>)
        }
        return page;
    }


    return (
        <div>

            {/* <button onClick={toggleView} >{settingsContext.showCompleted.toString()}</button> */}

            {activeList.map(item => (
                <div style={{justifyItems:"center"}} >
                <Card key={item.id} style={{width:"40%",margin:"auto", padding:"20px", marginTop:"30px"}}>
                <div className="bg-dark p-3">
                    <CloseButton  variant="white" onClick={() => props.handleDelete(item._id)}></CloseButton>
                   </div>
                    <p style={{ padding:"20px", fontWeight:"bold"}} >{item.text}</p>
                    <h5>Assigned to:</h5>
                    <p style={{ padding:"7px", fontWeight:"bold"}}><small> {item.assignee}</small></p>
                    <h5>Difficulty:</h5>
                    <p style={{ padding:"7px", fontWeight:"bold"}}><small> {item.difficulty}</small></p>
                    <h5>Complete:</h5>
                    <Badge onClick={() => props.toggleComplete(item._id, 'put')}> {item.complete ? "Complete" : "Pending..."}</Badge>
                    <hr />
                </Card>
                </div>

            ))}

            {activePage > 1 && <button onClick={() => { setActivePage(activePage - 1) }}>prev</button>}
            {pages()}

            {activePage < numOfPages && <button onClick={() => { setActivePage(activePage + 1) }} >next</button>}

        </div>
    )
}

export default List
