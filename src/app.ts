import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import routes from './routes/todos';

const app = express();

app.use(json());

app.use('/todos', routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
})

const port = 4000;
app.listen(port);