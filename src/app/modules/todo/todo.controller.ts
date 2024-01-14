import { Request, Response } from "express";
import { todoService } from "./todo.service";

const getTodos = async (req: Request, res: Response) => {
  try {
    const result = await todoService.getTodosFromDb();
    res.send(result);
    /*  res.json({
      status: 200,
      data: result,
    }); */
  } catch (error) {
    res.json({
      status: 404,
      message: "Something went wrong!",
    });
  }
};

const postTodos = async (req: Request, res: Response) => {
  try {
    const newTodo = req.body;
    const result = await todoService.postTodosIntoDb(newTodo);
    res.send(result);
    /*  res.json({
      status: 200,
      data: result,
    }); */
  } catch (error) {
    res.json({
      status: 400,
      message: "Something went wrong",
    });
  }
};

const getTodo = async (req: Request, res: Response) => {
  try {
    const id = req.query.id;
    const result = await todoService.getTodoFromDb(id as string);
    res.send(result);
    /* res.json({
      status: 200,
      data: result,
    }); */
  } catch (error) {
    res.json({
      status: 404,
      message: "Something went wrong!",
    });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await todoService.deleteTodoFromDb(id as string);

    res.send(result);
    /* res.json({
      status: 200,
      data: result,
    }); */
  } catch (error) {
    res.json({
      status: 404,
      message: "Something went wrong!",
    });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newTodo = req.body;
    const result = await todoService.updateTodoIntoDb(id,newTodo);
    res.send(result);
  } catch (error) {
    res.json({
      status: 404,
      message: "Something went wrong!",
    });
  }
};

export const todoController = {
  getTodos,
  postTodos,
  getTodo,
  deleteTodo,
  updateTodo,
};
