import Todo from "../models/todoModel.js";


export async function getAllTodo(req,res){
    if (req.query.q){
        let todoLists = await Todo.find({title:req.query.q})
        console.log(todoLists)
        res.render("home",{todoLists});
    }else{
        const todoLists = await Todo.find() 
        res.render("home",{todoLists});
    }
}

export async function getTodoByID(req,res){
    let ID = req.params.id
    const details = await Todo.findById({_id:ID})
    res.render("detail",{details});
}

export async function updateTodo(req, res){
    if (req.body.update){
        let ID = req.body.id
        let title = req.body.title
        let description = req.body.description
        let completed = req.body.completed
        if (!completed){
            completed = 'false'
        }
        const updateTodo = await Todo.findByIdAndUpdate(ID,{title,description,completed})
        .then(()=>{console.log('successfully updated')})
        .catch(err=>{console.error(err.message)})

    };
    if (req.body.delete){
        let ID = req.body.id
        const DeleteTodo = await Todo.findByIdAndRemove({_id:ID})
        .then(()=>{console.log('successfully deleted')})
        .catch(err=>{console.error(err.message)})
    };

    res.redirect("/");
}

export async function addTodo(req,res){
    console.log(req.body)
    let title = req.body.title
    let description = req.body.description
    let completed = req.body.completed
    
    if (req.body.addtodo){
        let todo = new Todo({
            title,
            description,
            completed
        })
        todo.save()
    }
    res.redirect("/");
}