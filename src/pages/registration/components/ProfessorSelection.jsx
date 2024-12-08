import { useState } from 'react'
import { FiTrash2, FiPlus } from 'react-icons/fi';


function ProfessorSelection({courses}) {
    const [numberCourse, setNumberCourse] = useState(1)
    const [subjects, setSubjects] = useState([])

    const addCourse = () => {
        setNumberCourse(prevNumberCourse => prevNumberCourse + 1)
    }

    const removeCourse = () => {
        setNumberCourse(prevNumberCourse => prevNumberCourse - 1)
    }
 
    const searchSubjects = (e) => {
        fetch(`http://localhost:3000/subjects?course_id=${e.target.value}`, {
            method: 'GET',
            headers: { 'Content-Type': 'Aaplication/json' }
        })
        .then((resp) => resp.json())
        .then((data) => setSubjects(data))
    }

    return(
        <div className="course-selection-container">

            { [...Array(numberCourse)].map ((_, index) => (
                <div className="row" key={index}>
                    <div className="form-group col-md-6">
                        <label htmlFor="student-user-course">Selecione seu curso</label>
                        <select className="form-control" onChange={searchSubjects}>
                            <option></option>
                            { courses.map((course)=> (
                                <option value={course.id} key={course.id}>{course.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="student-user-class">Selecione a disciplina</label>
                            <div className="d-flex align-items-center">
                                <select className="form-control">
                                    <option></option>
                                    { subjects.map((subject) => (
                                        <option value={subject.id} key={subject.id}>{subject.title}</option>
                                    ))}
                                </select>
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={removeCourse}>
                                    <FiTrash2 size={18}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
            <button 
                type="button" 
                className="btn btn-outline-dark d-flex align-items-center"
                onClick={addCourse}>
                <FiPlus />Add Curso
            </button>
        </div>
    )
}

export default ProfessorSelection