import EditTaskModal from './EditTaskModal'

function TaskList(props) {
    return (
        <>
            <div className="header-task-list row pb-3">
                <div className="text-center col-md-4">Título</div>
                <div className="text-center col-md-4">Tipo</div>
                <div className="text-center col-md-4">Ações</div> 
            </div>
            { props.tasks.map((task)=> (
                <>
                    <div className="row py-2" key={task.id}>
                        <div className="text-center col-md-4">{task.title}</div>
                        <div className="text-center col-md-4">{task.type}</div>
                        <div className="text-center col-md-4">
                            <i className="bi bi-pencil px-3"></i>
                            <i className="bi bi-trash px-3"></i>
                        </div> 
                    </div>
                    <hr></hr>
                </>
        ))}

            <EditTaskModal/>
        </>
    )
}

export default TaskList