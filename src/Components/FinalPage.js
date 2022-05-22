import React from 'react'
import Whitecarb from '../Images/BMWX5-2.png';
import Bmwexplore from '../Images/BMW-Explore.png';
import outline from '../Images/Outlined.png';



import './FinalPage.css'
function FinalPage() {
  return (
    <div className='summary'>
        <div className='successmsg'>
            <img style={{width:300,height:200,marginLeft:500}} src={Whitecarb} alt='success'/>
            <p style={{marginLeft:550}}><h4>Booking<strong> Successful</strong></h4></p>
            <p style={{marginLeft:530}}><strong><a href='#' style={{color:'red'}}>Download</a> the booking summary</strong></p>
        </div>
        <div className='summaryimg'>
        <img style={{width:800,height:300}} src={Bmwexplore} alt='bmwexplore'/>
        <div className='overlapping'style={{height:300,width:400,backgroundColor:'black'}}>
             
             <div>
                 <img className='img-overlay'style={{height:230,width:200,color:'yellow',marginLeft:90,marginTop:50}} src={outline}/>
             </div>
             <div className='overlay'style={{marginTop:-175,marginLeft:50,color:'white'}}>Explore more</div>
        </div>
       
        </div>
    </div>
  )
}

export default FinalPage