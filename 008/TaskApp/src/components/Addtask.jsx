import {useState} from 'react';
import { useTasksDicpatch } from '../contexts/TaskAppContext';
const Addtask = ()=>{
   const [text,setText] = useState('');
   const [count,setCount] =useState(0);
   const dispatch = useTasksDicpatch();
   return (
        <div>
                <input type="text" value={text}
                 onChange={(e)=>setText(e.target.value)}/>
                 <button type="button"
                    onClick={()=>{
                        setText('');
                        dispatch({
                            type : 'add',
                            id : count,
                            text : text,
                        });
                        setCount((prevCount)=>prevCount+1);
                    }}
                 >Add Task</button>
        </div>
   );
};
export default Addtask;
