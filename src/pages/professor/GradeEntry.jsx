import NavBar from "../../components/static/NavBar"
import Tab from "./components/Tab"
import Accordion from "./components/Accordion"
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import './Styles.css'
import EditTaskModal from './components/EditTaskModal'
import { useEffect, useState } from "react"

function GradeEntry() {
    const [modalVisibilty, setModalVisibility] = useState(false)
    const [tasks, setTasks] = useState([])
    const [taskModal, setTaskModal] = useState({})
    const [typeRequest, setTypeRequest] = useState(null)

    function changeRequestType(typeRequest) {
        const requests = {'CREATE': createTask, 'UPDATE': updateTask}
        setTypeRequest(() => requests[typeRequest])
    }

    function addItemToList(task) {
        setTasks((prevTask) => [...prevTask, task])
    }

    function deleteItemFromList(id) {
       setTasks((prevTasks) => prevTasks.filter((task)=> task.id !== id))
    }

    function updateItemFromList(updatedTask) {
        setTasks((prevTasks) => 
            prevTasks.map((task) => 
                task.id == updatedTask.id ? updatedTask : task   
            )
        )
    }

    useEffect(()=> {
        fetch("http://localhost:3000/tasks", {
            method: 'GET',
            headers: { 'Content-Type': 'Aaplication/json' }
        })
        .then((resp)=> resp.json())
        .then((data)=> { 
            setTasks(data)
        })
        .catch((err)=> console.log(err))
    }, [])


    function createTask(task) {
        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: { 'Content-Type': 'Aplication/json' },
            body: JSON.stringify(task)
        })
        .then((resp) => resp.json())
        .then((data)=> addItemToList(data))
        .then(closeModal)
   }

   function updateTask(task) {
        fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'Aplication/json' },
            body: JSON.stringify(task)
        })
        .then(updateItemFromList(task))
        .then(closeModal)
    }

    function deleteTask(task) {
        fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'Aaplication/json' }
        })
        .then(deleteItemFromList(task.id))
    }

    function changeModalData(task) {
        setTaskModal(task)
    }

    function openModal() {
        setModalVisibility(true)
    }

    function closeModal() {
        setModalVisibility(false)
    }

    return (
        <>
        <NavBar />
        <br/>
        <div className="container-fluid">
            <div className="row pb-4">
                <div className="col-md d-flex justify-content-between align-items-center">
                    <h5>Banco de Dados</h5>
                    <button 
                        type="button" 
                        className="btn btn-simple py-0 d-flex align-items-center"
                        onClick={() => {
                            openModal()
                            changeModalData({})
                            changeRequestType('CREATE')
                        }}
                    >
                        <i className="bi bi-plus-lg pr-1"></i>
                        Atividade
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <Tab
                        tasksSection={ 
                            <TaskList 
                                tasks={tasks} 
                                renderItem={(task) =>  
                                    <TaskItem
                                        task={task}
                                        changeModalData={changeModalData}
                                        requestType={changeRequestType}
                                        deleteTask={deleteTask}
                                        openModal={openModal}
                                    />
                                }
                            /> 
                        }
                        studentSection={<Accordion/>}
                    />
                </div>
            </div>
        </div>

        { modalVisibilty && 
            <EditTaskModal 
                taskData={taskModal} 
                sendRequest={typeRequest} 
                onClose={closeModal} 
            /> 
        }
        </>
    )
}

export default GradeEntry