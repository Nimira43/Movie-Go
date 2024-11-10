import Falcon from './../images/falcon.png'

const Home = () => {
  return(
    <>
      <div className='text-center'>
        <h2 className='ember'>Search My Movie DB</h2>
        <hr />
        <img src={Falcon} alt="Millenium Falcon" className='mt-3'></img>
      </div>
    </>
  )
}

export default Home