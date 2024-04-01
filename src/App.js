import Home from './pages/Home.jsx';
import './App.css';
import ValuePack from './components/ValuePack.jsx';
import {Routes,  Route} from "react-router-dom";
import ReadyToCook from './components/ReadyToCook.jsx';
import Cookware from './components/Cookware.jsx';
import Serveware from './components/Serveware.jsx';
import Cleaners from './components/Cleaners.jsx';
import Detergents from './components/Detergents.jsx';
import AllCategories from './components/AllCategories.jsx';
import HomeAppliances from './components/HomeAppliances.jsx';
import PopularCategory from './components/PopularCategory.jsx';
import SignIn from './components/SignIn.jsx';
import TeaCollections from './Collections/TeaCollections.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import Bag from './Collections/Bag.jsx';
import Candel from './Collections/Candel.jsx';
import Chocolate from './Collections/Chocolate.jsx';
import Cleansing from './Collections/Cleansing.jsx';
import Drink from './Collections/Drink.jsx';
import Pooja from './Collections/Pooja.jsx';
import Toothpaste from './Collections/Toothpaste.jsx';
import Towels from './Collections/Towels.jsx';
import Cutlet from './Collections/Cutlet.jsx';
import Cart from './components/Cart.jsx';



function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/AllCategories" element={<AllCategories/>} />
            <Route path="/ValuePack" element={<ValuePack/>} />
            <Route path="/ReadyToCook" element={<ReadyToCook/>} />
            <Route path="/HomeAppliances" element={<HomeAppliances/>} />
            <Route path="/Cookware" element={<Cookware/>} />
            <Route path="/Serveware" element={<Serveware/>} />
            <Route path="/Cleaners" element={<Cleaners/>} />
            <Route path="/Detergents" element={<Detergents/>} />
            <Route path="/PopularCategory" element={<PopularCategory/>} />
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/TeaCollections" element={<TeaCollections/>} />

            <Route path="/Bag" element={<Bag/>} />
            <Route path="/Candel" element={<Candel/>} />
            <Route path="/Chocolate" element={<Chocolate/>} />
            <Route path="/Cleansing" element={<Cleansing/>} />
            <Route path="/Drink" element={<Drink/>} />
            <Route path="/Pooja" element={<Pooja/>} />
            <Route path="/Toothpaste" element={<Toothpaste/>} />
            <Route path="/Towels" element={<Towels/>} />
            <Route path="/Cutlet" element={<Cutlet/>} />
            <Route path="/Candel" element={<Candel/>} />
            <Route path="/Cart" element={<Cart/>} />



          </Routes>

           </div>
  );
}

export default App;
