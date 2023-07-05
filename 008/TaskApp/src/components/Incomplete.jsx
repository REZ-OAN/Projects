
import Addtask from "./Addtask";
import { TasksProvider } from "../contexts/TaskAppContext";
import { TaskList } from "./Tasklist";
const Incomplete = ()=>{
    return (
        <>
        <h1>ToDo</h1>
        <TasksProvider>
            <Addtask/>
            <TaskList/>
        </TasksProvider>
        </>
    );
};
export default Incomplete; 