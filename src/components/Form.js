import React from 'react'
import useForm from '../hooks/form.js';
import { Button , Card, Elevation  } from "@blueprintjs/core";

function Form(props) {   
    const { handleChange, handleSubmit } = useForm(props.addItem);
    return (
        <Card interactive={true} elevation={Elevation.TWO}>
            <form onSubmit={handleSubmit} style={{  width: '50%' ,margin :'5px' }}>

                <h2>Add To Do Item</h2>
                <br/><br/>
                <label>
                    <h4>To Do Item  :   </h4>
                    
                    <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
                </label>
                <br/><br/>
                <label >
                    <h4>Assigned To  : </h4>
                    <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
                </label>

                <br/><br/>

                <label>
                    <h4>Difficulty  : </h4>
                    <input onChange={handleChange} defaultValue={3} type="range"  min={1} max={5} name="difficulty" />
                </label>
                <br/><br/>
                <label>
                    <Button type="submit">Add Item</Button>
                </label>
            </form>
        </Card>
    )
}

export default Form
