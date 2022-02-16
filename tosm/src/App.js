import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Slider  from './Components/Carousel/Carousel.js';
import Products from './Components/Products/product'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider/>
      <Products/>
           
    </div>
  );
}

export default App;
