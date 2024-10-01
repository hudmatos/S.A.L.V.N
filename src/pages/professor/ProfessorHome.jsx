import NavBar from '../../components/static/NavBar.jsx'
import CourseCard from './components/CourseCard.jsx'

function ProfessorHome() {

    return (
        <>
        <NavBar />
        <br/>
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
                <CourseCard />
            </div>
        </div>

        </div>
        
        </>
    )
}

export default ProfessorHome