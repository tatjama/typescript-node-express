import { RequestHandler} from 'express';
import Todo  from '../models/Todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo: Todo = new Todo(Math.random().toString(), text); 
    TODOS.push(newTodo);

    res.status(201).json({message:'Created todo', createdTodo: newTodo});
}

export const getTodos: RequestHandler = (req, res) => {
    res.status(200).json({todos: TODOS}); 
}

export const updateTodo: RequestHandler<{id: string}> = (req, res) => {
    const id = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === id );
    if(todoIndex < 0){
        throw new Error('Todo not found');
    } 
         new Todo(todoIndex.toString(), (req.body as {text: string}).text);
    
    
    res.json(200).json({message: 'Updated todo', updatedTodo: TODOS[todoIndex]})
}

export const deleteTodo: RequestHandler= (req, res) => {
    const id = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id ===id);
    if(todoIndex < 0){
        throw new Error('Todo not found');
    }
    TODOS.splice(todoIndex, 1);
    res.json({message: 'Deleted todo on index: ' + todoIndex});    
}