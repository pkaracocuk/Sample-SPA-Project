import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import Undefined from "./pages/Undefined";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/ürünler" element={<ProductsPage/>}/>
      <Route path="/ürün-detay/:productId" element={<Details/>}/>
      <Route path="*" element={<Undefined/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
