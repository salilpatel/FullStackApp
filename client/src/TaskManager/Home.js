import axios from 'axios'
import { useEffect, useState } from "react"
import PendingTask from './PendingTask'
import CompletedTask from './CompletedTask'

const Home=()=>{
    const [data,setData] = useState([])
    const [ID,setID] = useState()
    const [taskName,setTaskName] = useState('')
    const [stalker,setStalker] = useState(false)

    useEffect(
        ()=>{
            axios.get('/getalltask')
            .then((res)=>{
                console.log(res);
                setData(res.data);
                setStalker(false);
            })
            .catch((err)=>console.log('error'))
        },[stalker]
    )

    const completedtask=()=>{
        const result = data.filter((item)=>item.completionstatus===true)
        return result
    }
    const pendingtask=()=>{
        const result = data.filter((item)=>item.completionstatus===false)
        return result
    }

    /* add task */
    const handleID=(e)=>{
        setID(e.target.value)
    }
    const handleTaskName=(e)=>{
        setTaskName(e.target.value)
    }
    const addTask=(e)=>{
        e.preventDefault()
        axios.post('/createtask',{
            taskid: ID,
            taskname: taskName,
            completionstatus: false
        }).then((res)=>{
            console.log('inside addTask',res);
            setStalker(true);
        }).catch((err)=>console.log('error'))
    }

    /* update task */
    const handleUpdate=(ID)=>{
        axios.get(`/changecompletion/${ID}`)
        .then((res)=>{
        console.log('inside handleUpdate',res);
        setStalker(true);
        })
        .catch((err)=>console.log('error'))        
    }

    /* delete task */
    const handleDelete=(ID)=>{
        axios.get(`/deleteTask/${ID}`)
        .then((res)=>{
        console.log('inside handleDelete',res);
        setStalker(true)
        })
        .catch((err)=>console.log('error'))
        
    }

    return(
        <div>
            <h1>Task Manager</h1>
            <form>
                Enter task ID: <input type='number' onChange={(e)=>handleID(e)} />
                Enter task Name: <input type='text' onChange={(e)=>handleTaskName(e)} />
                <button onClick={(e)=>addTask(e)}>add task</button>
            </form>
            <PendingTask pendingtask={pendingtask()} handleUpdate={handleUpdate} handleDelete={handleDelete} />
            <CompletedTask completedtask={completedtask()} handleUpdate={handleUpdate} handleDelete={handleDelete} />
        </div>
    )
}

export default Home