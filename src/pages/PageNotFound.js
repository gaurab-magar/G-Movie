import { useEffect } from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  useEffect(()=>{
    document.title="Page Not Found - Coding Challenge"
  })
  return (
    <main className="height d-flex align-items-center justify-content-center">
      <section  className="text-5xl text-info font-bold text-center">
          <h1>Page Not Found</h1>
          <h1>404 Oops!..</h1>
          <Link  to="/">
            <button className="btn btn-primary">Back to GMOVIE</button>
          </Link>
      </section>
    </main>
  )
}
