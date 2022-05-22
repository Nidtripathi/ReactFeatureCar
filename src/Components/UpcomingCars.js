import React from 'react'
import './UpcomingCars.css';
import { useHistory} from 'react-router-dom'
import FeatureCarCard from './FeatureCarCard';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


const UpcomingCars =()=> {
  const history = useHistory();
  
  const navigateToFeaturedCars = () =>{ 
    history.push("/allcars");
  }
  return (
    <div className='FeatureCar'>Featured <strong>Car</strong>
        <header>
  {/* <!-- Navbar --> */}
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="container-fluid">
      {/* <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button> */}
      <div id="navbarExample01">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#" style={{backgroundColor:'black',color:'white',width:150,textAlign:'center'}}>Popular</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{width:150,textAlign:'center'}} href="#">Just Launched</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{width:150,textAlign:'center'}} href="#">Upcoming</a>
          </li>
          {/* <li>
          </li> */}
        
        </ul>
        
      </div>
    </div>
    <p className="" style={{marginLeft:550,color:'grey'}}>View all<ArrowForwardIosIcon onClick={navigateToFeaturedCars} style={{marginLeft:70,marginTop:-65}}></ArrowForwardIosIcon></p>
  </nav>
 
</header>
<div className='featurecard-up'>
<FeatureCarCard></FeatureCarCard>

</div>
    </div>
  )
}

export default UpcomingCars;