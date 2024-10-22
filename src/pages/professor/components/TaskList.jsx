function TaskList({ tasks, renderItem}) {

    return (
        <>
            <div className="header-task-list row pb-3">
                <div className="text-center col-md-3">Título</div>
                <div className="text-center col-md-3">Tipo</div>
                <div className="text-center col-md-3">Data de notificação</div> 
                <div className="text-center col-md-3">Ações</div> 
            </div>
            { tasks.map((task)=> (
                <>
                    <div className="row py-2" key={task.id}>
                        {renderItem(task)}
                    </div>
                    <hr></hr>
                </>
            ))}
        </>
    )
}

export default TaskList