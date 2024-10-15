import NavBar from "../../components/static/NavBar"
import Tab from "./components/Tab"
import './Styles.css'
import { useEffect, useState } from "react"

function GradeEntry() {

    const [tasks, setTasks] = useState([])

   useEffect(()=> {
    fetch("http://localhost:3000/tasks", {
        method: 'GET',
        headers: {
            'Content-Type': 'Aaplication/json'
        }
    })
    .then((resp)=> resp.json())
    .then((data)=> {
        setTasks(data)
        console.log(data)
    })
    .catch((err)=> console.log(err))
   }, [])

    return (
        <>
        <NavBar />
        <br/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md">
                    <h5>Banco de Dados</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <Tab tasks={tasks}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default GradeEntry