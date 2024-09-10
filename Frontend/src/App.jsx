// import Home from "./pages/Home";
import Product from "./pages/Product";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error";
import Navbar from "./pages/Navbar";
const App = () => {
  return <>
    <Navbar/>
     <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/products" element={<Product/>}></Route>
      <Route path="*" element={<Error/>}></Route>
     </Routes>
    
 
  </>;
};
export default App;
