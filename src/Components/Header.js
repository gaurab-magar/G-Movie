import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Header = () => {

  const navigate = useNavigate();

  const handleSubmit = (event)=>{
      event.preventDefault();
      const queryTerm = event.target.search.value;
      event.target.reset();
      return navigate(`/search?q=${queryTerm}`);
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark navy shadow-lg">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="">G-MOVIES</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <NavLink className="nav-link" to="" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="movies/top" >Top Rated</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="movies/popular">Popular</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="movies/upcoming">Up Coming</NavLink>
              </li>
            </ul>
            <form className="d-flex gap-2 none" onSubmit={handleSubmit}>
              <input name="search" className="form-control rounded-4 " type="search" placeholder="Search..."/>
              <button className="btn btn-outline-info rounded-5" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}
