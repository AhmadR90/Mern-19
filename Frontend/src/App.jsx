// import Home from "./pages/Home";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import About from "./pages/About";
const App = () => {
  return (
    <>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Login />}></Route>
          <Route path="sign-up" element={<SignUp />}></Route>
        </Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="products" element={<Product />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};
export default App;
