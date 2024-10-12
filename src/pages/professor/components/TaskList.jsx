
function TaskList() {
    return (
        <>
            <div className="header-task-list row pb-3">
                <div className="text-center col-md-4">Título</div>
                <div className="text-center col-md-4">Tipo</div>
                <div className="text-center col-md-4">Ações</div> 
            </div>
            <div className="row py-2">
                <div className="text-center col-md-4">Trabalho 01</div>
                <div className="text-center col-md-4">Trabalho</div>
                <div className="text-center col-md-4">
                    <i className="bi bi-pencil px-3"></i>
                    <i className="bi bi-trash px-3"></i>
                </div>
            </div>
            <hr></hr>
            <div className="row py-2">
                <div className="text-center col-md-4">Prova 01</div>
                <div className="text-center col-md-4">Prova</div>
                <div className="text-center col-md-4">
                    <i className="bi bi-pencil px-3"></i>
                    <i className="bi bi-trash px-3"></i>
                </div>
            </div>
            <hr></hr>
           
        </>
    )
}

export default TaskList