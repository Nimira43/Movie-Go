import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Movies = () => {

  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "Star Wars",
        release_date: "1977-05-25",
        runtime: 121,
        mpaa_rating: "PG",
        description: "A long time ago, in a galaxy far far away...",
      },
      {
        id: 2,
        title: "Highlander",
        release_date: "1986-03-07",
        runtime: 116,
        mpaa_rating: "R",
        description: "There can only be one...",
      },
      {
        id: 3,
        title: "Raiders of the Lost Ark",
        release_date: "1981-06-12",
        runtime: 115,
        mpaa_rating: "PG-13",
        description: "I'm making this up as I go...",
      },
    ]
    setMovies(moviesList)
  }, [])

  return (
    <div>
      <h2>Movies</h2>
      <hr />
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id}>
              <td>
                <Link to={`/movies/${m.id}`}>
                  {m.title}
                </Link>
              </td>
              <td>{m.release_date}</td>
              <td>{m.mpaa_rating}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Movies