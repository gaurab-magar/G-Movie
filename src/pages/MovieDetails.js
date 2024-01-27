import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import { useTitle } from "../hooks/useTitle";

export const MovieDetails = ({title}) => {
  let params = useParams();
  const [data , setData] = useState({});

  useEffect(()=>{
    async function fetchMovie(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=a3df5947265f5a583bb4b85b7e7394d6
      `);
      const json = await response.json();
      setData(json);
    }
    fetchMovie();
  },[])
  useTitle(data.title);
  return (
    <main>
      <section>
        <div className="container-fluid py-5 height bg-dark">
          <div className="row me-md-5 mx-sm-2">
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <div className="img-thumbnail">
                <img className='img-fluid img-detail' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title}></img>
              </div>
            </div>
            <div className="col-md-7 mt-md-0 mt-sm-5 mt">
              <div className=" card w-100 h-100 second text-secondary">
                <div className="card-body p-4 d-flex flex-column gap-2">
                  <div className="contianer">
                    <h3 className="text-light">{data.title}</h3>
                    <p>{data.overview}</p>
                    {data.genres ? (
                      <p>
                        {data.genres.map((genre)=>(
                          <span className="py-2 px-3 rounded-3 border me-2 fw-bold" key={genre.id}>{genre.name}</span>
                        ))}
                      </p>
                    ):""}
                    <p>
                      <span className="fw-bold">RunTime: </span>
                      <span>{data.runtime}</span>
                    </p>
                    <p>
                      <span className="fw-bold">Budget: </span>
                      <span>{data.budget}</span>
                    </p>
                    <p>
                      <span className="fw-bold">Revenue: </span>
                      <span>{data.revenue}</span>
                    </p>
                    <p>
                      <span className="fw-bold">Release Date: </span>
                      <span>{data.release_date}</span>
                    </p>
                    <p>
                      <span className="fw-bold">IMDB Code: </span>
                      <a href={`https://www.imdb.com/title/${data.imdb_id}`} target="_blank" rel="noreferrer" className="text-decoration-none text-white">{data.imdb_id}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


  

