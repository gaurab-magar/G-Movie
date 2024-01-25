import { useFetch } from "../hooks/useFetch";
import { Card } from "../Components/Card";
import { useSearchParams } from "react-router-dom";

export const Search = ({apipath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const{data:movies} = useFetch(apipath , queryTerm);
  return (
    <main className="search text-center" >
      <section className="fs-3 p-3">
        <p className="fw-bold text-info">{movies.length === 0 ? `No Result found for ${queryTerm}`: `Result for ${queryTerm}`}</p>
      </section>
      <div className="container py-5 px-0">
        <div className="px-0 row row-cols-1 row-cols-md-6 g-3 d-flex justify-content-center">
          {
            movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
              ))
              }
        </div>
      </div>
    </main>
  )
}
