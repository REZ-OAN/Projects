import { useTasks } from '../contexts/TaskAppContext';
import Task from './Task';
export const TaskList = ()=>{
    const tasks = useTasks();
    return (
        <div>
            <ul>
                {tasks.map((task)=>(
                    <li key={task.id}>
                        <Task task={task}/>
                    </li>
                )
                )}
            </ul>
        </div>
    );
};

