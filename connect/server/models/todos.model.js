import mongoose, { mongo } from "mongoose";

const todoSchmea = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      //@ To give the reference as a field to another data model
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    //@ Array of Sub- Todos
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchmea);
