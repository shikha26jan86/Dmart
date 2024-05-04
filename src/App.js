import Home from './pages/Home.jsx';
import './App.css';
import ValuePack from './components/ValuePack.jsx';
import {Routes,  Route} from "react-router-dom";
import AllCategories from './components/AllCategories.jsx';
import PopularCategory from './components/PopularCategory.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import Drink from './Collections/Drink.jsx';
import Toothpaste from './Collections/Toothpaste.jsx';

import Cart from './components/Cart.jsx';
import CoffeeSection from './Collections/CoffeeSection.jsx';
import HealthyDrink from './Collections/HealthyDrink.jsx';
import DairySection from './Collections/DairySection.jsx';
import BathSoaps from './Collections/BathSoaps.jsx';
import CookwareSection from './components/CookwareSection.jsx';
import ReadyTOCookCardSection from './components/ReadyTOCookCardSection.jsx';
import HomeApplianceSection from './components/HomeApplianceSection.jsx';
import ServewareSection from './components/ServewareSection.jsx';
import DetergentAndFabricSection from './components/DetergentAndFabricSection.jsx';
import TeaSection from './Collections/TeaSection.jsx';
import CleanserSection from './components/CleanserSection.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Pooja from './Collections/Pooja.jsx';
import Soap from './Collections/Soap.jsx';



function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/AllCategories" element={<AllCategories/>} />
            <Route path="/ValuePack" element={<ValuePack/>} />
            <Route path="/ReadyTOCookCardSection" element={<ReadyTOCookCardSection/>} />
            <Route path="/HomeApplianceSection" element={<HomeApplianceSection/>} />
            <Route path="/CookwareSection" element={<CookwareSection/>}/>
            <Route path="/ServewareSection" element={<ServewareSection/>}/>
            <Route path="/CleanserSection" element={<CleanserSection/>} />
            <Route path="/DetergentAndFabricSection" element={<DetergentAndFabricSection/>} />
            <Route path="/PopularCategory" element={<PopularCategory/>} />
      
            <Route path="/TeaSection" element={<TeaSection/>} />
            <Route path="/CoffeeSection" element={<CoffeeSection/>} />
            <Route path="/HealthyDrink" element={<HealthyDrink/>} />  
            <Route path="/Drink" element={<Drink/>} />
            <Route path="/Soap" element={<Soap/>} />
            <Route path="/Pooja" element={<Pooja/>} />
            <Route path="/DairySection" element={<DairySection/>} />
            <Route path="/Toothpaste" element={<Toothpaste/>} />
            <Route path="/BathSoaps" element={<BathSoaps/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<LoginSignup/>} />
          </Routes>
           </div>
  );
}

export default App;
