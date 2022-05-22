
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import NewCar from './Components/NewCar';
import UsedCar from './Components/UsedCar';
import CarDetail from './Components/CarDetail';
import Booking from './Components/Booking';
import FinalPage from './Components/FinalPage';
import FeatureCars from './Components/FeatureCars';
import Xtremecar from './Components/Xtremecar';


function App() {
  return (
    <div>
    <Router>
    <Navbar />
    <Switch>
        <Route path='/' exact component={Xtremecar} />
        <Route path='/newcar' exact component={NewCar}></Route>
        <Route path='/usedcar' exact component={UsedCar}></Route>
        <Route path='/profile' exact component={Profile}></Route>
        <Route path='/allcars' exact component={FeatureCars}></Route>
        <Route path='/cardetail' exact component={CarDetail}></Route>
        <Route path='/booking' exact component={Booking}></Route>
        <Route path='/finalpage' exact component={FinalPage}></Route>
       

      </Switch>
      <Footer/>
    </Router>
    
    
    </div>
  );
}

export default App;
