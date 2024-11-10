import Falcon from './../images/falcon.png'

const Home = () => {
  return(
    <>
      <div className='text-center'>
        <h2>Search My Movie DB</h2>
        <hr />
        <img src={Falcon} alt="Millenium Falcon"></img>
      </div>
    </>
  )
}

export default Home