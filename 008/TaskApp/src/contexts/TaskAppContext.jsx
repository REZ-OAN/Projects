/* eslint-disable react-refresh/only-export-components */
import { useContext,createContext, useReducer } from "react";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);
const initialTasks = [];
const checkedTasks = [];
export const TasksProvider = ({children})=>{
     const [tasks,dispatch] = useReducer(tasksReducer,initialTasks);
     return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
     );
};
export  const useTasks = ()=> useContext(TasksContext);
export const useTasksDicpatch = ()=> useContext(TasksDispatchContext);
const tasksReducer = (tasks,action)=>{
        switch(action.type){
            case 'add' : {
                return [...tasks,{
                    id : action.id,
                    text : action.text,
                    done : false
                }
                ];
            }
            case 'change':{
                return tasks.map((task)=>{
                        if(task.id === action.task.id){
                            return action.task;
                        }
                        else{
                            return task;
                        }
                });
            }
            case 'delete':{
                    return tasks.filter((task)=> task.id!==action.id);
            }
            case 'checked':{
                checkedTasks.unshift(action.task);
                return tasks.filter((task)=> task.id!==action.task.id);
            }
            default: {
                throw Error('Unknown action: ' + action.type);
              }
        }
};
