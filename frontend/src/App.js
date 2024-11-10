/* eslint-disable jsx-a11y/anchor-has-content */
import Home from './components/Home'
function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='logo mt-3'>My Movie DB</h1>
        </div>
        <div className='col text-end'>
          <button className='btn-ember'>Login
            <a href='#!' className='btn-ember'></a> 
          </button>
        </div>
        <hr className='mb-3' />
      </div>
      <div className='row'>
        <div className='col-md-2'>
          <nav>
            <div className='list-group'>
              <a href='#!' className='list-group-item list-group-item-action'>Home</a>
              <a href='#!' className='list-group-item list-group-item-action'>Movies</a>
            </div>
          </nav>
        </div>
        <div className='col-md-10'>
          <Home />
        </div>
      </div>
    </div>   
  )
}

export default App
