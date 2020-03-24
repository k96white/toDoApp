import React,{useState} from 'react';
import './App.css';
function ToDo({todo,index,completeTodo,removeTodo}){
    return(
     <> 
       <div className='todo' style={{textDecoration: todo.isCompleted? 'line-through':''}}>{index+1}: {todo.text}</div>
       <div>
         <button type='button' style={{display:'inline'}} onClick={() => completeTodo(index)}>Complete</button>
         <button type='button' style={{display:'inline'}} onClick={() => removeTodo(index)}>X</button>
       </div><br/>
     </>  
    )
}

function TodoForm({addTodo}){
   const [value,setValue] = useState('');
  const handleSubmit = (e) =>{
       e.preventDefault();
       if(!value){
         return ;
       }
       addTodo(value);
       setValue('');
   }
    
   return (
     <form onSubmit={handleSubmit}>
        <input type='text' className='input' value={value} placeholder='Enter a new Todo' onChange={ e => setValue(e.target.value)}></input>
     </form>
   )

}

// this is our main function
export default function App() {
  const [todos,setTodos] = useState([
    {
        text : 'learn react',
        isCompleted : false
    },
    {
      text : 'Meet friends for lunch',
      isCompleted : false
    },
    {
      text : 'Build really cool toDo app',
      isCompleted : false
    }
  ])

  const addTodo = (text) =>{
    const NewToDos = [...todos,{text}];
    setTodos(NewToDos);
  }
  const completeTodo =(index) =>{
    const NewToDos = [...todos];
    NewToDos[index].isCompleted=true;
    setTodos(NewToDos);
  }
  const removeTodo = (index) =>{
    const NewToDos = [...todos];
    NewToDos.splice(index,1);
    setTodos(NewToDos);
  }
  return (
    <div className='app'>
       <header style={{textAlign:'center'}}><h1>TO-DO APP</h1></header>
       <div className='todo-list'>
         {todos.map( (todo,index) =>(
           <ToDo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}></ToDo>
         ))}
         <TodoForm addTodo={addTodo} />
       </div>
    </div>
  )
}
