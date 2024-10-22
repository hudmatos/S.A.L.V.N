import '../Styles.css'
import {useState} from 'react'

function Accordion() {

    const [accordionShow, setAccordionShow] = useState('')

    const changeAccordionShow = (index) => {
        setAccordionShow((prevShow)=> prevShow == index ? '' : index)
    }

    return(
    
        <div className="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button 
                className={`accordion-button ${accordionShow == 1 ? '' : 'collapsed'}`} 
                    type="button" onClick={()=> changeAccordionShow(1)}
                >
                    Accordion Item #1
                </button>
                </h2>
                <div  className={`accordion-collapse collapse ${accordionShow == 1 ? 'show' : ''}`}>
                <div className="accordion-body p-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, corrupti voluptas. Neque minima dolore, eligendi ipsa sint quasi est quia commodi deleniti. Nesciunt ut necessitatibus praesentium neque id culpa minus!
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button 
                    className={`accordion-button ${accordionShow == 2 ? '' : 'collapsed'}`} 
                    type="button" onClick={()=> changeAccordionShow(2)}
                >
                    Accordion Item #1
                </button>
                </h2>
                <div  className={`accordion-collapse collapse ${accordionShow == 2 ? 'show' : ''}`}>
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, corrupti voluptas. Neque minima dolore, eligendi ipsa sint quasi est quia commodi deleniti. Nesciunt ut necessitatibus praesentium neque id culpa minus!
                </div>
                </div>
            </div>
        </div>

       
    )
}

export default Accordion