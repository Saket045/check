import mongoose from "mongoose";
const toDoSchema = new mongoose.Schema({
    toDo: {
      type: String,
      required: true,
    },
  });
const Todo=mongoose.model("Todo",toDoSchema);
export default Todo;