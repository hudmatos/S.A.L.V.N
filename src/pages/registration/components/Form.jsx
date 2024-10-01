import React, { useState } from 'react'

function Form() {
    const [isStudent, setIsStudent] = useState(true);

    function toggleOptionUser() {
        setIsStudent(!isStudent)
    }

    return (
        <>
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
                        { isStudent && (
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="student-user-course">Selecione seu curso</label>
                                    <select className="form-control" id="student-user-course">
                                    <option></option>
                                    <option>CIÊNCIAS DA COMPUTAÇÃO</option>
                                    <option>FÍSICA</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="student-user-class">Selecione sua turma</label>
                                        <select className="form-control" id="student-user-class">
                                        <option></option>
                                        <option>BROWNIE</option>
                                        <option>BOLO NO POTE</option>
                                    </select>
                                </div>
                            </div>  
                        )}
                            
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">SALVAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form