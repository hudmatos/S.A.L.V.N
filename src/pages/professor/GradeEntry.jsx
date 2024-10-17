import NavBar from "../../components/static/NavBar"
import Tab from "./components/Tab"
import './Styles.css'
//import { useEffect, useState } from "react"



function GradeEntry() {

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
                    <Tab />
                </div>
            </div>
        </div>

       
        </>
    )
}

export default GradeEntry