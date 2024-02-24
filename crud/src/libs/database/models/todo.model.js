import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = models?.Todo || model("Todo", TodoSchema);

export default Todo;
