import {Link} from 'react-router-dom';

export const Card = ({movie}) => {
  const {id , title , overview , poster_path , release_date}=movie;
  return (
    <div>
      <div className="card mList mx-md-2 mx-sm-5 card-height p-md-0 rounded-3">
        <div className="card-body p-0 position-relative">
          <Link to={`/movie/${id}`}>
            <img className='img-fluid object-fit w-100' src={`https://image.tmdb.org/t/p/w500${poster_path}`}></img>
            <p className='ontop px-2'>{overview.substring(0,100)}</p>
          </Link>
        </div>
      </div>
      <div className='text-center mt-2'>
        <h6 className='fw-semi'>{title}</h6>
        <p className='text-muted'>{release_date}</p>
      </div>
    </div>
  )
}