

function TaskItem({task, changeModalData, requestType, deleteTask, openModal}) {
    return(
        <>
            <div className="text-center col-md-3">{task.title}</div>
            <div className="text-center col-md-3">{task.type}</div>
            <div className="text-center col-md-3">{task.date}</div>
            <div className="text-center col-md-3">
                <i 
                    className="bi bi-pencil px-3" 
                    onClick={()=> {
                        changeModalData(task)
                        requestType('UPDATE')
                        openModal()
                    }}
                >
                </i>
                <i className="bi bi-trash px-3" onClick={()=> deleteTask(task)}></i>
            </div>
        </>
    )
}

export default TaskItem