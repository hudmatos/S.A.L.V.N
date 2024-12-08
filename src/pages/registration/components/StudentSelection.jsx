function StudentSelection() {
    return(
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
                    <option>Brownie</option>
                    <option>Bolo no pote</option>
                </select>
            </div>
    </div> 
    )
}

export default StudentSelection