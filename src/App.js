import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Productlist from './components/productlist';
import Details from './components/Details';
import Cart from './components/cart';
import Default from './components/Default';
function App() {
  return (
    
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Productlist}/>
      <Route path="/details" component={Details}/>
      <Route path="/Cart" component={Cart}/>
     
      <Route component={Default}/>
    </Switch>
    {/* <Productlist/>
    <Details></Details>
    <Cart></Cart>
    <Default></Default> */}
    </>
  );
}

export default App;
