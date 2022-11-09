import React from 'react'
import "./MainDash.css"
const Rocoins = React.lazy(() => import('./Rocoins'));
function MainDash() {
  return (
    <div className='main'>
        <div className="heading">
      <h1>Crypto Hunter</h1>
      <p>Get all the info regarding your favourite crypto currency</p>
      </div>
      <Rocoins/>
    </div>
  )
}

export default MainDash
