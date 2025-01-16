import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top py-4">
      <div className="container">
        <Link className="navbar-brand sizing text-white text-uppercase p-0 m-0 fs-3 " to={"/Home"}>Start Framework
        </Link>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="navbar-toggler-icon"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
          <li className="nav-item px-lg-2">
          <NavLink className="nav-link sizing text-uppercase p-2 text-white" aria-current="page" to={"/About"}>About</NavLink>
        </li>
        <li className="nav-item px-lg-2">
          <NavLink className="nav-link sizing text-uppercase p-2 text-white" to={"/Portfolio"}>Portfolio</NavLink>
        </li>
        <li className="nav-item px-lg-2">
          <NavLink className="nav-link sizing text-uppercase p-2 text-white" to={"/Contact"}>Contact</NavLink>
        </li> 
      </ul>
    </div>
  </div>
</nav>
</>
  );
};

export default Navbar;
