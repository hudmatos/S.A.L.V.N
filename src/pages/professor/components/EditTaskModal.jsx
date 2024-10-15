import { useState } from "react"


function EditTaskModal() {
    const [isActive, setIsActive] = useState(false)

    function closeModal() {
        setIsActive(false)
    }


    return (
        <>
            <div className={`modal ${isActive ? 'fade show' : 'hidden'} edit-task`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Adicionar Atividade</h5>
                            <div className="close-modal" onClick={closeModal}>
                                <i className="bi bi-x-lg"></i>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="task-title" className="form-label">Título</label>
                                <input type="text" className="form-control" id="task-title" placeholder="Informe o título da atividade"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="task-type" className="form-label">Tipo de atividade</label>
                                <select className="form-control" id="task-type">
                                    <option></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dateInput">Data de notificação</label>
                                <input type="date" className="form-control" id="dateInput"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary">CANCELAR</button>
                            <button type="button" className="btn btn-primary">SALVAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTaskModal