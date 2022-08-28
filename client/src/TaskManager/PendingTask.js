const PendingTask = (props) => {
    
    const updateItem=props.handleUpdate
    const deleteItem=props.handleDelete

    return ( 
        <div>
            <h2>Pending Task</h2>
            <ul>
            {
                props.pendingtask.map((item)=>(
                    <li>
                        <h3>{item.taskname}</h3>
                        <button onClick={()=>updateItem(item.taskid)}>mark completed</button>
                        <button onClick={()=>deleteItem(item.taskid)}>delete</button>
                    </li>
                ))
            } 
            </ul>   
        </div>
     );
}
 
export default PendingTask;
