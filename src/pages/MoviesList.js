import { Card } from "../Components/Card"
import { useFetch } from "../hooks/useFetch";

export const MoviesList = ({apipath}) => {
  const { data:movies } =useFetch(apipath);

  return (
    <main>  
      <section className="bg-light height">
        <div className="container-fluid px-0">
          <div className="header-img position-relative">
            <img className="img-fluid" alt="header" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg"></img>
            <div className="header-ontop">
                <div className="ms-5">
                  <h1>Welcome.</h1>
                  <span>Millions of movies, TV shows and people to discover. Explore now.</span>
                </div>
              <div className="container w-100 d-flex justify-content-center my-4 ">
              <input className="form-control w-90 rounded-5" placeholder="Search for a movie..."></input>
              <button className="btn btn-info rounded-5 text-white px-4 py-2 ms-2 fw-bold">Search</button>
              </div>
            </div>
          </div>
            
          <div className="container py-5 px-0">
            <div className="px-0 row row-cols-1 row-cols-md-6 g-3 d-flex justify-content-center">
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
