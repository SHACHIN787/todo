import { useState } from "react";
import PropTypes from 'prop-types';


 export default function TaskApp({onAdd}){
    TaskApp.propTypes = {
        onAdd: PropTypes.func.isRequired,
      };
    const [taskValue,setTaskValue]= useState("");
    const handleSubmit=(ev)=>{
        ev.preventDefault();
        onAdd(taskValue);
        setTaskValue("");
    }
    return(
        <form onSubmit={handleSubmit}>
            
            < input type="text" 
                placeholder="your next task" 
                value={taskValue}
                onChange={ev => setTaskValue(ev.target.value)}
                />
                <button>+</button>

        </form>
        
        
    )
    
}