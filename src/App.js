import { Routes ,Route } from "react-router-dom";
import CartScreen from "./Components/CartScreen";
import Navbar from "./Components/Navbar";
import ProductScreen from "./Components/ProductScreen";



function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        
        <main className="py-16">
          <Routes>
            <Route path="/" element={<ProductScreen/>}/>
            <Route path="/cart" element={ <CartScreen/>}/>
          </Routes>
        </main>
      </>
    </div>
  );
}

export default App;
