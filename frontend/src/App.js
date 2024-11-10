function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='logo mt-3'>My Movie DB</h1>
        </div>
        <div className='col text-end'>
          {/* <button className='btn-ember'>Login */}
            <a href='#!' className='btn-ember'>Login</a> 
          {/* </button> */}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-2'>
          <nav>
            <div className="list-group">

            </div>
          </nav>
        </div>
      </div>
    </div>   
  )
}

export default App
