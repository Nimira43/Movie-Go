import Ticket from './../images/tickets.jpg'

const Home = () => {

  return (
    <>
      <div className="text-center">
        <h2>Search for a Movie</h2>
        <hr />
        <img src={Ticket} alt="movie tickets"></img>
      </div>
    </>
  )
}

export default Home