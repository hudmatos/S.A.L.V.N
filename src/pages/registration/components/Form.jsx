import { useState, useEffect } from 'react'
import ProfessorSelection from './ProfessorSelection'
import StudentSelection from './StudentSelection'

function Form() {
    const [isStudent, setIsStudent] = useState(true);
    const [courses, setCourses] = useState([]);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        user_type: {}
    })
    const [userStudent, setUserStudent] = useState({
        registration: '',
        class_group: ''
    })
    const [userProfessor, setUserProfessor] = useState({
        registration: '',
        course: [],
        subject: []
    })
    const [course, setCourse] = useState([{
        course_id: '',
        subject_id: ''
    }])
   
    const courseChange = (courseInput) => {
        setCourse([...course, courseInput])
    }
    
    useEffect(()=> {
        fetch("http://localhost:3000/courses", {
            method: 'GET',
            headers: { 'Content-Type': 'Aaplication/json' }
        })
        .then((resp) => resp.json())
        .then((data) => setCourses(data))
    },[])

    function toggleOptionUser() {
        setIsStudent(!isStudent)
    }

    return (
      
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Cadastro de Usuário</h5>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="user-name">Nome</label>
                            <input type="text" className="form-control" id="user-name" placeholder="Digite seu nome"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="user-registration">Matricula</label>
                            <input type="password" className="form-control" id="user-registration" placeholder="Informe sua matrícula"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="user-email">Email</label>
                            <input type="email" className="form-control" id="user-email" placeholder="Informe seu email"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="user-password">Senha</label>
                            <input type="text" className="form-control" id="user-password" placeholder="Crie sua senha"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-check col-md">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="user-is-student" 
                                checked={isStudent}
                                onClick={toggleOptionUser}
                            />
                            <label className="form-check-label" htmlFor="user-is-student">Sou aluno</label>
                        </div>
                    </div>
                    { isStudent ? <StudentSelection /> : <ProfessorSelection courses={courses} /> }
                        
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">SALVAR</button>
                    </div>
                </form>
            </div>
        </div>
      
    )
}

export default Form