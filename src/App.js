import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import How from "./pages/How"
import Signup from "./pages/SignUp"
import Shop from "./pages/Shop"
import Wholesale from "./pages/Wholesale"
import Footer from "./components/Footer"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/howitworks" element={<How/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/wholesale" element={<Wholesale/>}/>
        </Routes>
      </div>
      <br></br>
      <Footer/>
    </>
  );
}

export default App;
