import React, {  } from "react";
import './Navbar.css';
import Logo from '../Images/XTREMECARSLOGO.png';
import { useHistory ,Link} from "react-router-dom";


const Navbar = () => {
 

  const history = useHistory();
  
  const navigateToHomePage = () =>{ 
    history.push("/");
  }

  
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a onClick={navigateToHomePage}className="navbar-brand" href="#"><img src={Logo} />XTREMECARS</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <ul className="nav-ul">
        <li>
         <Link className="nav-item nav-link active"to="/newcar">NEW CAR</Link>
        </li>
        <li>
         <Link className="nav-item nav-link active" to="/usedcar">USED CAR</Link>
        </li>
        <li>
         <Link className="nav-item nav-link active" to="/profile">MY PROFILE</Link>
        </li>
      </ul>
      {/* <a  href="#">NEW CARS</a>
      <a className="nav-item nav-link active used-car" href="#">USED CARS</a>
      <a className="nav-item nav-link active" href="#">MY PROFILE</a> */}
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
// classNameNameName Navbar extends Component {
//     render() {
//         return (
//                     <div>
//                         <nav classNameNameName="navbar navbar-light bg-light">
//                                 <a classNameNameName="navbar-brand" href="#">Navbar{" "}
//                                 <span classNameNameName="badge badge-pill badge-secondary">{this.props.totalCounter}
//                                 </span>
//                                 </a>
//                         </nav>
//                     </div>
//                 );

//     }
// }

// export default Navbar;
