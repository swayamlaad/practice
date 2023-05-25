 import React, { useState } from "react";
import ToDoList from './ToDoList'



 const App = () => {
   const [inputList, setInputList] = useState(" buy apple");
   const [items, setItems ] = useState([]);

   const itemEvent = (event) => {
    setInputList(event.target.value ); 
   };

   const listOfItems = () => {

    setItems((oldItems) =>{
      return [...oldItems, inputList];
    });
    setInputList("");

   };

    const  deleteItem = (id) =>{

    setItems((oldItems) => {

       return oldItems.filter((arrElem, index) => {
           return index !== id;

       });
     });



   };


  return <>
    <div className="main_div">
      <div className="center_div">
      <br />
      <h1> ToDo List</h1>
      <br />
      <input type="text" placeholder='Add a item' onChange={itemEvent} />
      <button onClick={listOfItems}> + </button>

      <ol> 
        {items.map( (itemval, index) => {
            return <ToDoList text = {itemval} key = {index}  id = {index} onSelect = {deleteItem}/>
        } )}

      </ol>
  


       

      </div>

    </div>
  </>
    

 };


export default App;
