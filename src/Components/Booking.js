import React from 'react';
import './Booking.css';
import Whitecarb from '../Images/BMWX5-2.png';
import { useHistory} from 'react-router-dom';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Booking = () => {
    const history = useHistory();
  
    const navigateToCarDetail = () =>{ 
      history.push("/cardetail");
    }
    const navigateToLastPage = () =>{ 
        history.push("/finalpage");
      }
    
  return (
    <div>
       <div className="row">
       <div className="col-6 col-sm-4 leftdetail"><h4 style={{marginLeft:20,marginTop:30}}>Car <strong>Details</strong></h4>
       <div className='image2'><img style={{width:250,height:200,marginLeft:-70,marginTop:5}} src={Whitecarb} alt='car2'/></div>
       <div className='carname'>
           <h4><strong>BMW X5</strong></h4>
       </div>
       <div className='desp1'><p style={{marginBottom:-3}} >Fuel Type</p>
        <span style={{lineHeight:1}}><strong >Petrol and Desiel</strong></span>
       </div>
       <div className='desp1'><p style={{marginBottom:-3}}>Engine</p>
        <span style={{lineHeight:1}}><strong >2993 to 2998 C</strong></span>
       </div>
       <div className='desp1'>
           <p>View All Details <ArrowForwardIosIcon  onClick={navigateToCarDetail}style={{marginLeft:150,marginTop:-5}}></ArrowForwardIosIcon></p>
       </div>
       </div>
       <div className="col-12 col-lg-6 rightdetail"><h4 style={{marginLeft:20,marginTop:30}}>Booking <strong>Details</strong></h4>
        <form className='forms'>
        <div className='name'>
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName"  placeholder="Enter your name"/>
        </div>
        <div className='number'>
        <label for="inputNumber">Contact Number</label>
        <input type="number" class="form-control" id="inputNumber"  placeholder="+91-9999999900"/>
        </div>
        <div>
    <select className="custom-select" required>
      <option value="">Select a City</option>
      <option value="1">Gurgaon</option>
      <option value="2">Noida</option>
      <option value="3">Delhi</option>
    </select>

    <div className='checkbox'>
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">I accept the Terms and Conditions</label>
    <p><strong>*Terms and Conditions:</strong></p>
    <p>Terms and conditions are a binding set of rules <br></br>
        that serve as a contract between you and the users who <br></br>
        visit your website or use your app. They are also known as <br></br>
        terms of service and terms of use, and are abbreviated as T&Cs.</p>
    </div>
        </div>
        <div className='submitbtn'>
            <button onClick={navigateToLastPage}style={{marginLeft:-450,marginTop:10, width:120,height:40 }}>SUBMIT</button>
        </div>
        </form>
       </div>
       </div>
    </div>
  )
}

export default Booking