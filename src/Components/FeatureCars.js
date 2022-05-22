import React from 'react'
import './FeatureCar.css';
import AllFeatureCarCard from './AllFeatureCarCard';
import FeatureCarCard from './FeatureCarCard';

const FeatureCars=() =>{
   
  return (
    <div className='FeatureCar'>
        <header>
  {/* <!-- Navbar --> */}
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="container-fluid">
     
      <div id="navbarExample01">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#" style={{backgroundColor:'black',color:'white'}}>ViewAll</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sedan</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Suv</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hatchback</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">BMW</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
<div className='featurecard-up'>
<AllFeatureCarCard></AllFeatureCarCard>

</div>
    </div>
  )
}

export default FeatureCars