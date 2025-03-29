import './App.css';
import "flowbite";
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/ProductInfo/ProductDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />}>
          
          </Route>
      </Routes>
    </div>
  );
}

export default App;
