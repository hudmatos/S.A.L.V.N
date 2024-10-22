import { useState } from "react"
import '../Styles.css'


function Tab({tasksSection, studentSection}) {
    const [btnActive, setBtnActive] = useState(1)

    function toggleBtnActive(index) {
        setBtnActive(index)
    }


    return (
        <>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <div className="col-md-6 p-0">
                    <button 
                        className={`nav-link w-100 ${ btnActive == 1 ? 'active' : '' }`} 
                        onClick={() => toggleBtnActive(1)}
                        type="button">
                        ATIVIDADES
                    </button>
                </div>
                <div className="col-md-6 p-0">
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
            <div className={`tab-pane fade p-4 ${btnActive == 1 ? 'show active' : ''}`}>
                { tasksSection }
            </div>
            <div className={`tab-pane fade ${btnActive == 2 ? 'show active' : ''}`}>
                <div className="section-content">
                { studentSection }
                </div>
            </div>
        </div>
        
        </>
        

    )
}

export default Tab