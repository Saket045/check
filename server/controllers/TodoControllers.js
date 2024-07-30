import Todo from '../models/TodoModels.js';

export const getTodos=async(req,res)=>{
 const todos=await Todo.find();
 res.send(todos);
}
export const saveTodos=(req,res)=>{
    const {toDo}=req.body;
    Todo.create({ toDo })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
export const updateTodos=async(req,res)=>{
    const {id}=req.params;
    const {toDo}=req.body;
    const updatedTodo=await Todo.findByIdAndUpdate(id,{toDo});
    if(updatedTodo)
    return res.status(200).json(updatedTodo);
else 
return res.status(404).json({ message: "Todo not found" });
}
export const deleteTodos=async(req,res)=>{
    const {id}=req.params;
    await Todo.findByIdAndDelete(id).then(()=>
        res.send({ message: "Todo deleted successfully" }))
    .catch((error)=>res.send({error:error.message}))   
}
