import express from 'express'
import cors from 'cors'
import {todoRouter}  from './app/modules/todo/todo.routes';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/',todoRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


export default app;