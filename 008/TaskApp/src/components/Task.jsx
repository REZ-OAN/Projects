import { useState } from "react";
import { useTasksDicpatch } from "../contexts/TaskAppContext";

const Task = ({task})=>{
    const [isEdit,setIsEdit] = useState(false);
    const [ischecked,setIschecked] =useState(false);
    const dispatch = useTasksDicpatch();
    let taskContent = '';
    if(isEdit) {
        taskContent = (
            <>
      
            <input value={task.text} onChange={(e)=>{
                dispatch({
                    type : 'change',
                    task : {
                        ...task,
                        text:e.target.value
                    }
                });
            }}/>
            <button onClick={()=>setIsEdit(false)}>
                Save
            </button>
        
            </>
        );
    }
    else {
        taskContent = (
            <>
            
            {task.text}
            <button onClick={()=>setIsEdit(true)}>
                Edit
            </button>
            <button onClick={()=>{
                dispatch({
                    type : 'delete',
                    id : task.id
                });
            }}>Delete</button>
            
            </>
        )
    }
    return (
        <p>
         <input
        type="checkbox"
        checked={ischecked}
        onChange={()=> {
          setIschecked(true);
          dispatch({
            type:'checked',
            task:{
                ...task,
            }
          });
        }}
      />
      {taskContent}
        </p>
    );
    
};
export default Task;