import React, {useState} from 'react'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';



const ListCompo= (props) => {
 const [line, setLine] = useState(false);

 const cutIt = () =>{

    setLine(true)
 } 

  return (
    <div className="todo_style">
    <span onClick={cutIt}><RemoveCircleIcon className='deleteIcon'/></span>
    <li style={{ textDecoration: line ?  'line-through' : 'none'}}> {props.text} </li>
    </div>
      
    
  )
};

export default ListCompo ;
