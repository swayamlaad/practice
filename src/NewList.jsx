import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListCompo from './ListCompo';


const NewList = () => {

    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);

    const itemEvent = (event) =>{
        setItem(event.target.value)
           

    };
    const listOfItem = () => {
        setNewItem((prevValue)=>{
          return [...prevValue, item ];

        });
        setItem("");

    };



  return (
    <div className='main_div'>
    <div className="center_div">
    <br />
    <h1>ToDo List$</h1>
    <br />
    <input type="text" placeholder='add a item' value={item} onChange={itemEvent}/>
    <Button className='newBtn' onClick={listOfItem}><AddCircleOutlineIcon/></Button>
    <br />
    <ol>
       { newitem.map( (val) =>{

          return <ListCompo text={val} />
       })}
    
    <br />
    </ol>


    </div>
      
    </div>
  );};

  export default  NewList ;



