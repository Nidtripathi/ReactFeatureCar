import React from 'react'
import './CarDetail.css'
import { useHistory} from 'react-router-dom';
import Whitecar from '../Images/BMWX5-1.png';
import Whitecarb from '../Images/BMWX5-2.png';
import Interior1 from '../Images/InteriorFinishimg1.png';
import Interior2 from '../Images/InteriorFinishimg2.png';
import GreyRect from '../Images/Rectangle-grey.png';
import BrownRect from '../Images/Rectangle-brown.png';


const CarDetail = () => {
  const history = useHistory();
  
  const navigateToBooking = () =>{ 
    history.push("/booking");
  }
  return (
<div classNameName='grids'>
<div className="row">
   <div className="col-12 col-sm-6 images"><h4 style={{marginLeft:20,marginTop:30}}><strong>BMW</strong> XS</h4>
   <div className='image1'> <img src={Whitecar} alt='car1'/></div>
   <div className='image2'><img src={Whitecarb} alt='car2'/></div>
   <div className='image3'><img src={Interior1} style={{width:500,height:200}} alt='interior1'/></div>
   <div className='image4'><img src={Interior2} style={{width:500,height:200}} alt='interior2'/></div>
   </div>
   <div className="col-6 col-md-4 description"><h4 style={{marginLeft:20,marginTop:30}}>Car <strong>Specification</strong></h4>
   <div className='specification'>
   <div className='desp1'><p style={{marginBottom:-3}} >Fuel Type</p>
   <span style={{lineHeight:1}}><strong >Petrol and Desiel</strong></span>
   </div>
   <div className='desp1'><p style={{marginBottom:-3}}>Engine</p>
   <span style={{lineHeight:1}}><strong >2993 to 2998 C</strong></span>
   </div>
   <div className='desp1'><p style={{marginBottom:-3}}>Torque</p>
   <span style={{lineHeight:1}}><strong >450 to 690 NM</strong></span>
   </div>
   <div className='desp1'><p style={{marginBottom:-3}}>Acceleration</p>
   <span style={{lineHeight:1}}><strong >5.5 to 6.5 seconds</strong></span>
   </div>
   <div className='desp1'><p style={{marginBottom:-3}}>Top Speed</p>
   <span style={{lineHeight:1}}><strong >230 to 243 Kmph</strong></span>
   </div>
   <div className='desp1'><p style={{marginBottom:-3}}>Top Speed</p>
   <span style={{lineHeight:1}}><strong >230 to 243 Kmph</strong></span>
   </div>
   <div className='desp1'><p style={{marginBottom:-3}}>Variants</p>
   <span style={{lineHeight:1}}><strong >BMW X5 comes in four distinctive trims starting with the entry level X5, Xdrive4D SportsX plus,Xdrive3D SportsX plus, Xdrive3Dm Luxary line and Xdrive3D M sport</strong></span>
   </div>
   </div>
   <div style={{marginTop:100}} className='exterior'>
   <div className='ext1'><p><strong>Exteriors</strong></p>
   <img src={GreyRect} alt='grey-rect'/>
   </div>
   <div className='ext1'><p>Exteriors</p>
   <span style={{lineHeight:1}}><strong >BMW X5 comes in four distinctive trims starting with the entry level X5, Xdrive4D SportsX plus,Xdrive3D SportsX plus, Xdrive3Dm Luxary line and Xdrive3D M sport</strong></span>
   </div>
   
   </div>

   <div style={{marginTop:100}} className='interior'>
   <div className='ext2'><p><strong>Interior finishes</strong></p>
   <img src={BrownRect} alt='brown-rect'/>
   <br></br>
   <br></br>
   <p style={{lineHeight:1}}>
   <strong>
     <ul>
       <li>X5 has a high-end cockpit</li>
       <li>Vernasca leather uphoistery for the seats</li>
       <li>A paranomic sunproof</li>
       <li>Four-zone temperature control</li>
       <li>BMW display key,</li>
       <li>headsup display,parking and reversing assistance</li>
       <li>Surrounded view cameras and alternative attentions.</li>
     </ul>
   </strong>
   </p>
   </div>
   </div>

   <div style={{marginTop:70}} className='cost'>
     <p><strong>COST
     <span style={{marginLeft:120}}>76.5 Lkh</span></strong>
     </p>
   </div>
    
   <div style={{marginTop:40,marginLeft:60}} className='Btn'>
     <button onClick={navigateToBooking}style={{margin:4,width:140,height:40}}>BOOK NOW</button>
   </div>
   </div>
</div>
</div>
  )
}

export default CarDetail