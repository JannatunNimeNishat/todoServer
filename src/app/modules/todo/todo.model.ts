import { Schema, model } from "mongoose";
import { TTodo } from "./todo.interface";

const todoSchema = new Schema<TTodo>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority:{
    type:String,
    enum:['low','medium','high'],
    required:true
  },
  isCompleted:{
    type:Boolean,
    required:true
  }
});

export const Todos  = model<TTodo>('Todos', todoSchema);
