import { TTodo } from "./todo.interface";
import { Todos } from "./todo.model"

const getTodosFromDb = async() =>{
    const result = await Todos.find({});
    return result;
}

const postTodosIntoDb =async (payload:TTodo) => {
    const result = await Todos.create(payload);
    return result;
}

const getTodoFromDb = async(id:string) =>{
    const result = await Todos.findOne({id});
    return result;
}
const deleteTodoFromDb = async(id:string) =>{
    const result = await Todos.deleteOne({ _id: id });
    return result;
}

const updateTodoIntoDb = async(id:string,payload:Partial<TTodo>) =>{
    // const todo = await Todos.findOne({_id:id});
    const updatedTodo = {
        ...payload,

    }
    const result = await Todos.findByIdAndUpdate(id,updatedTodo,{new:true});
    return result;
}

export const todoService = {
    getTodosFromDb,
    postTodosIntoDb,
    getTodoFromDb,
    deleteTodoFromDb,
    updateTodoIntoDb
}