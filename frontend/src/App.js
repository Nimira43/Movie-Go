/* eslint-disable jsx-a11y/anchor-has-content */
import { Outlet } from 'react-router-dom'
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
              <a href='#!' className='list-group-item list-group-item-action bg-ember light'>Home</a>
              <a href='#!' className='list-group-item list-group-item-action bg-ember light'>Movies</a>
              <a href='#!' className='list-group-item list-group-item-action bg-ember light'>Genres</a>
              <a href='#!' className='list-group-item list-group-item-action bg-ember light'>Add Movies</a>
              <a href='#!' className='list-group-item list-group-item-action bg-ember light'>Edit Movies</a>
              <a href='#!' className='list-group-item list-group-item-action bg-ember light'>GraphQL Options</a>
            </div>
          </nav>
        </div>
        <div className='col-md-10'>
          <Outlet />
        </div>
      </div>
    </div>   
  )
}

export default App
