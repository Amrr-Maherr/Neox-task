import './App.css';
import "flowbite";
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/ProductInfo/ProductDetails';
import Accessories from './Components/ProductInfo/Accessories';
import Description from './Components/ProductInfo/Description';
import Specification from './Components/ProductInfo/Specification';
import Reviews from './Components/ProductInfo/Reviews';
import MoreProducts from './Components/ProductInfo/MoreProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />}>
          <Route path="Accessories" element={<Accessories />} />
          <Route path="Description" element={<Description />} />
          <Route path="Specification" element={<Specification />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="MoreProducts" element={<MoreProducts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
