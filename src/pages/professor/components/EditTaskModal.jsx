import { useState } from "react";

function EditTaskModal({onClose, taskData, changeItem}) {

    const [task, setTask] = useState(taskData || {})

    function handleChange(e) {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    function handleTaskType(e) {
        setTask({ ...task, type: e.target.options[e.target.selectedIndex].text })
    }

    function submit(e) {
        e.preventDefault()
        if(taskData) {
            updateTask(task)
        }
    }

    function createTask(task) {
        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: { 'Content-Type': 'Aplication/json' },
            body: JSON.stringify(task)
        })
        .then((resp) => resp.json())
        .then((data) => console.log("Criado com sucesso " + data))  
   }

   function updateTask(task) {
        fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'Aplication/json' },
            body: JSON.stringify(task)
        })
        .then(changeItem(task))
        .then(onClose)
        .catch((err)=> console.log(err))
    }

    return (
        <>
            <div className="modal fade show edit-task-modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Adicionar Atividade</h5>
                            <div className="close-modal">
                                <i className="bi bi-x-lg" onClick={onClose}></i>
                            </div>
                        </div>
                        <form onSubmit={submit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="task-title" className="form-label">Título</label>
                                    <input 
                                        name="title"
                                        className="form-control" 
                                        id="task-title"
                                        type="text" 
                                        value={ task.title || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="task-type" className="form-label">Tipo de atividade</label>
                                    <select 
                                        className="form-control" 
                                        name="type"
                                        id="task-type"
                                        onChange={handleTaskType}>
                                        <option>{ task.type }</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dateInput">Data de notificação</label>
                                    <input 
                                        type="datetime-local" 
                                        name="date"
                                        className="form-control" 
                                        id="dateInput"
                                        value={ task.date || '' }
                                        onChange={ handleChange }
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onClose}>CANCELAR</button>
                                <button type="submit" className="btn btn-primary">SALVAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTaskModal