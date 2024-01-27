import { useNavigate } from "react-router-dom";
import { Card } from "../Components/Card"
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";


export const MoviesList = ({apipath , title}) => {
  const navigate = useNavigate();

  const { data:movies } =useFetch(apipath);
   const handleFind = (event) =>{
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
   }
  useTitle(title)
  return (
    <main>  
      <section className="bg-light height">
        <div className="container-fluid px-0 mx-md-0 mx-sm-3">
          <div className=" mb-0 mb-md-1 position-relative">
            <div className="img-container">
              <img className="img-fluid" alt="header" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg"></img>
            </div>
            <div className="container mb-0 header-ontop">
                <div className="wtop">
                  <h1>Welcome.</h1>
                  <span>Millions of movies, TV shows and people to discover. Explore now.</span>
                </div>
              <div>
              <form onSubmit={handleFind}  className="container w-100 d-flex justify-content-center my-4 ">
                <input name="search" className="form-control w-90 rounded-5" placeholder="Search for a movie..."></input>
                <button className="btn btn-info rounded-5 text-white px-4 py-2 ms-2 fw-bold">Search</button>
              </form>
              </div>
            </div>
          </div>
            
          <div className="container mt-1 mt-md-5">
            <div className="firstchild px-0 row row-cols-1 row-cols-md-6 g-3 d-flex justify-content-center">
              {movies.map((movie)=>(
                <Card key={movie.id} movie={movie}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
