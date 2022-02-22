import express, {Router, Request, Response} from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todos';

const router: Router = Router();

router.get('/', getTodos);

router.get('/:id', (req: express.Request, res: express.Response) =>{

})

router.post('/', createTodo);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;