
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Society</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>
                                <li className="nav-item"><Link to="/posts" className="nav-link ">Posts</Link></li>
                                <li className="nav-item"><Link to="/members" className="nav-link">Registration</Link></li>
                                <li className="nav-item"><Link to="/members/all" className="nav-link">Members</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;
