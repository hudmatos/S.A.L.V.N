import { useEffect, useState } from "react"
import EditTaskModal from './EditTaskModal'

function TaskList() {
    const [taskData, setTaskData] = useState(null)
    const [modalVisibilty, setModalVisibility] = useState(false)
    const [tasks, setTasks] = useState([])
    const [taskIndex, setTaskIndex] = useState(null)

    function changeItemTask(task) {
        tasks[taskIndex] = task
    }

    useEffect(()=> {
        fetch("http://localhost:3000/tasks", {
            method: 'GET',
            headers: { 'Content-Type': 'Aaplication/json' }
        })
        .then((resp)=> resp.json())
        .then((data)=> { 
            setTasks(data)
            console.log(data)
        })
        .catch((err)=> console.log(err))
    }, [])

    function changeModalData(task) {
        setTaskData(task)
    }

    function openModal() {
        setModalVisibility(true)
    }

    function closeModal() {
        setModalVisibility(false)
    }

    return (
        <>
            <div className="header-task-list row pb-3">
                <div className="text-center col-md-4">Título</div>
                <div className="text-center col-md-4">Tipo</div>
                <div className="text-center col-md-4">Ações</div> 
            </div>
            { tasks.map((task, index)=> (
                <>
                    <div className="row py-2" key={task.id}>
                        <div className="text-center col-md-4">{task.title}</div>
                        <div className="text-center col-md-4">{task.type}</div>
                        <div className="text-center col-md-4">
                            <i 
                                className="bi bi-pencil px-3" 
                                onClick={()=> {
                                    changeModalData(task);
                                    setTaskIndex(index);
                                    openModal()
                                }}>
                            </i>
                            <i className="bi bi-trash px-3"></i>
                        </div> 
                    </div>
                    <hr></hr>
                </>
            ))}

            { modalVisibilty && 
                <EditTaskModal 
                    onClose={closeModal} 
                    taskData={taskData}
                    changeItem={changeItemTask} 
                /> 
            }
        </>
    )
}

export default TaskList