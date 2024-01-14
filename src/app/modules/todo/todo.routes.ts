import { Router } from "express";
import { todoController } from "./todo.controller";

const router  = Router();

router.get('/tasks',todoController.getTodos);
router.post('/task', todoController.postTodos);
router.get('/task/:id',todoController.getTodo);
router.delete('/task/:id',todoController.deleteTodo);
router.patch('/task/:id',todoController.updateTodo);


export const todoRouter = router;


