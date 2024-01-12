import { Link } from 'react-router-dom';

function Layout({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">React Calculatrice</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link link-light" to='/'>Calculatrice - Basique</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link link-light' to="/challenge">Calculatrice - Complète</Link>
                            </li>
                        </ul>
                        <div className="d-flex ms-auto">
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </>
    )
}

export default Layout