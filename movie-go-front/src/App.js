function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='mt-3'>Movie Go</h1>
        </div>
        <div className='col text-end'>
          <a href='#!'><span className='badge bg-danger'>Login</span></a>
        </div>
        <hr className='col-md-3'/>
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <a href="#!" className="list-group-item list-group-item-action">Home</a>
              <a href="#!" className="list-group-item list-group-item-action">Movies</a>
            </div>
          </nav>
        </div>
      </div>
      <div className="col-md-10">

      </div>
    </div>
  )
}

export default App
