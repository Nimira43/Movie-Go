import { FourOhFour } from './../images/vader.png'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h1 className='gold-mt-3'>404: Page Not Found</h1>
          <hr />
          <img src={FourOhFour} alt="Millenium Falcon" className='mt-3'></img>
          <p><em>{error.statusText || error.message}</em></p>
        </div>
      </div>
    </div>
  )
}