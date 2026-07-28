import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Bg from './components/Bg';

function App() {
  const[checkedstat,setcheckedstat]=useState(true)
  const[todo,setTodo]=useState("")
 const [todoList, setTodoList] = useState(() => {
  const stored = localStorage.getItem("todolist");
  return stored ? JSON.parse(stored) : [];
});
  
  useEffect(() => {
    console.log("Saving to Local Storage:", todoList);
    localStorage.setItem("todolist",JSON.stringify(todoList))
  }, [todoList])


  

  const handleAdd=()=>{
    if(todo.trim()!==""){
      setTodoList([...todoList,{ id: uuidv4(), details:todo, isCompleted:false }])
      setTodo("")

    }
    
  }


  const handleDelete=(e , id)=>{
    let newTodoList=todoList.filter((item)=>item.id!=id)
    setTodoList(newTodoList)
  }

  const handleEdit=(e, identity)=>{
    let t=todoList.filter((item)=>item.id==identity)
    setTodo(t[0].details)
    let newTodoList=todoList.filter((item)=>item.id!=identity)
    setTodoList(newTodoList)
  }

  const handleChange=(e)=>{
    setTodo(e.target.value)
  }

  const handlehiding=()=>{
    setcheckedstat(!checkedstat)
  }

  const handleCheckbox=(e)=>{
    let id=e.target.name
    let index=todoList.findIndex((item)=>item.id==id)
    let newTodoList=[...todoList]
    newTodoList[index].isCompleted=!newTodoList[index].isCompleted
    setTodoList(newTodoList)
  }

  return (
    <>
    <Bg/>
      <Navbar/>
        <div className="max-w-5xl mx-auto bg-violet-300 rounded-xl min-h-[90vh] my-6 p-6">
          <div className="font-bold text-violet-600 text-center italic text-xl">ENTER YOUR TODO ITEMS</div>
          <div className="flex gap-2.5 mt-2"> 
            <input type="text" onChange={handleChange} value={todo} placeholder="Add a new todo..." className="bg-white min-w-[60vw] p-1.5 flex-1"/>
            <button onClick={handleAdd} className=" bg-violet-600 text-white rounded-md px-3 py-1.5"><IoMdAdd /></button>
          </div>
          <div className='mt-3'>
            <input onChange={handlehiding} type="checkbox" name="" id="check" checked={checkedstat}/>
            <label className="px-1.5 text-violet-600" htmlFor="check">Show finished tasks</label>
          </div>
          {todoList.length==0 && <div className="mt-3.5">No todo items found !!</div>}
          {todoList.map((item) => {
            return (checkedstat || !item.isCompleted) && <div key={item.id} className="flex items-center mt-3.5 gap-2">
              <input type="checkbox" name={item.id} onChange={handleCheckbox} checked={item.isCompleted} />

            <p className={`${item.isCompleted ? 'line-through' : ''} flex-1 break-words`}>{item.details}</p>

            <div className="buttons flex gap-2">
              <button onClick={(e)=>handleEdit(e , item.id)} className=" bg-violet-600 text-white rounded-md p-1"><MdEdit /></button>
              <button onClick={(e)=>handleDelete(e , item.id)} className=" bg-violet-600 text-white rounded-md p-1"><MdDelete /></button>
            </div>
          </div>
          })}
        </div>
    </>
  )
}

export default App
