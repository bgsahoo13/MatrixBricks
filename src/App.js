import './App.css';
import CarouselComponent from './Components/Cosmetic_Products/CarouselComponent';
import CovidCard from './Components/Cosmetic_Products/CovidCard';
import Product from './Components/Cosmetic_Products/Product';
import Craousle from './Components/Craousle/Craousle';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import ContactDetails from './Components/OrderStatus/ContactDetails';
import OrderStatus from './Components/OrderStatus/OrderStatus';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Product/>
      <Craousle/>
      <OrderStatus/>
      <CovidCard/>
      <CarouselComponent/>
      <ContactDetails/>
      <Footer/>
    </div>
  );
}

export default App;
