import '../Styles.css'

function CourseCard() {
    return(
        <div className="card">
            <div className="card-header">
                <h4>Ciências da Computação</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">Banco de Dados</h5>
                <div className="d-flex justify-content-between py-2">
                    <span>Turma</span>
                    <span>PI001</span>
                </div>
                <div className="d-flex justify-content-between py-2">
                    <span>Período</span>
                    <span>3º</span>
                </div>
                <div className="d-flex justify-content-end pt-2">
                    <button type="button" className="btn btn-outline-primary">selecionar</button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard