import React from 'react'
import './FeatureCarCard.css';
import { useHistory} from 'react-router-dom'
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {data} from '../Helpers/AllSearchData';
const AllFeatureCarCard = () => {
  const history = useHistory();
  
  const navigateToCarDetailsHandler = () =>{ 
    history.push("/cardetail");
  }
  return (
    <div className='container'>
      <div className='row justify-content-center'>

      {data.allSearchData.map((item,index)=>{
        return(
          <div className='col-11 col-md-6 col-lg-3 mx-0 mb-5'>
          <div className="card">
            <img src={item.img} className="card-img-top" alt="Fissure in Sandstone"/>
            <div className="card-body">
                <h5 className="card-title" style={{marginLeft:10}}>{item.title}</h5>
                <p className="card-text"style={{marginLeft:10,marginTop:4}}>{item.price} <ArrowForwardIosIcon onClick={navigateToCarDetailsHandler} style={{marginLeft:150,marginTop:-10}}></ArrowForwardIosIcon></p>
                
            </div>
        </div>
        </div>
        )
      })}
      </div>  
    </div>
  )
}

export default AllFeatureCarCard