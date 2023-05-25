import React, { useState } from 'react'; 

import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from 'react-digital-clock';





const TodoListt = () => {

    const [num, setNum] = useState(0);

    const incNum = () =>{

        setNum(num+1);


    }

    const decNum = () =>{
      if(num>0){
        setNum(num-1);}

        else{
            alert("sorry 0 limt reached")
            setNum(0);
        }
        
    }







    return(
        <>

           <div className='main_div'>
           
           <div className='center_div'>
           <h1><Clock /></h1>
           <h1>{num}</h1>
           <div className='btn-div'>
            {/* <Button  onClick={incNum}><AddIcon/></Button> */}
            {/* <Button onClick={decNum}><DeleteIcon/></Button> */}
            <Tooltip title="Add">
            <Button variant="contained"  className='btn_green' onClick={incNum}><AddIcon/></Button>
            </Tooltip>
            <Tooltip title="Delete">
            <Button variant="contained" className="btn_red" onClick={decNum}><DeleteIcon/></Button>
            </Tooltip>
           </div>
            



           </div>



           </div>  

        </>
    )

}

export default TodoListt;
