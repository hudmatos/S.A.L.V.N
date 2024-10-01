import UnifapiLogo from '../../../public/unifapi_logo.png'
import './NavBar.css'

function NavBar() {

    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="navbar-brand">
                    <div className="d-flex">
                        <img src={UnifapiLogo} alt="Logo" width="auto" height="50" className="d-inline-block align-text-top" />
                        <div>
                            <h5 className="m-0">S.A.L.V.N</h5>
                            <small>Sistema Acadêmico de Lançamento e Verificação de Notas</small>
                        </div>  
                    </div>
                </div>
                <div className="user-avatar">
                    <spam>R</spam>
                </div>
            </div>
        </nav>  
    )
}

export default NavBar