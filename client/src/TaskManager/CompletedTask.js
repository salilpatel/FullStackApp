const CompletedTask = (props) => {
    
    const updateItem=props.handleUpdate
    const deleteItem=props.handleDelete

    return ( 
        <div>
            <h2>Completed Task</h2>
            <ul>
            {
                props.completedtask.map((item)=>(
                    <li>
                        <h3>{item.taskname}</h3>
                        <button onClick={()=>updateItem(item.taskid)}>mark uncomplete</button>
                        <button onClick={()=>deleteItem(item.taskid)}>delete</button>
                    </li>
                ))
            } 
            </ul>  
        </div>
     );
}
 
export default CompletedTask;