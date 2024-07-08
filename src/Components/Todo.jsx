import "./Todo.css"
import { useEffect, useState } from "react";
import {MdDeleteForever, MdCheck} from "react-icons/md";




export const Todo=()=>{
    const[inputValue, setInputValue]=useState("");
    const[task, setTask]= useState([]);
    const[dateTime , setDateTime] = useState("")

    const handleInputChange=(value)=>{
        setInputValue(value);
    }


    const handleFormSubmit = (event)=>{
        event.preventDefault();
        
        if(!inputValue) return;

        if(task.includes(inputValue)){
            setInputValue("");
            return;    
        };

        setTask((prevTask) => [...prevTask, inputValue]);
            
        setInputValue("")
    }

    // Date and time
    

    useEffect(()=>{

        const interval = setInterval(() => {

            const now = new Date();
            const formattedDate = now.toLocaleDateString();
             const formattedTime=now.toLocaleTimeString();
    
             setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000);
        return()=> clearInterval(interval);
    },[])



    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time"> {dateTime}</h2>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event)=>handleInputChange(event.target.value)}/>
                    </div>
                    <button type="submit" className="todo-btn"> ADD Task</button>
                </form>
            </section>
            <section className="unorderlist">
                <ul>
                    {
                        task.map((task,index)=>{
                            return<li key={index} className="todo-item">
                                <span>-{task}</span>
                                <button className="check-btn" >
                                    <MdCheck/> 
                                    </button>
                                <button className="delete-btn">
                                    <MdDeleteForever/>
                                </button>
                                </li>
                        })
                    }
                    <button className="clear-btn">Clear</button>
                </ul>
            </section>
        </section>
    )
}