import { useState } from "react"
import '../Styles.css'
import TaskList from './TaskList'

function Tab(props) {
    const [btnActive, setBtnActive] = useState(1)

    function toggleBtnActive(index) {
        setBtnActive(index)
    }


    return (
        <>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <div className="col-md-6">
                    <button 
                        className={`nav-link w-100 ${ btnActive == 1 ? 'active' : '' }`} 
                        onClick={() => toggleBtnActive(1)}
                        type="button">
                        ATIVIDADES
                    </button>
                </div>
                <div className="col-md-6">
                <button 
                        className={`nav-link w-100 ${ btnActive == 2 ? 'active' : '' }`} 
                        onClick={() => toggleBtnActive(2)}
                        type="button">
                        LANÇAMENTOS
                    </button>
                </div>
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <div className={`tab-pane fade p-4 ${btnActive == 1 ? 'show active' : ''}`} id="nav-home">
                <TaskList tasks={props.tasks} />
            </div>
            <div className={`tab-pane fade ${btnActive == 2 ? 'show active' : ''}`} id="nav-profile">
                Oi
            </div>
        </div>
        
        </>
        

    )
}

export default Tab