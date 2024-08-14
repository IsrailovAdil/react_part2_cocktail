
import HomePages from "./pages/HomePages";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CocktailPage from "./pages/CocktailPage";
import IngredientPage from "./pages/ingredientPage";
import Header from "./Сomponents/Header";
import Footer from "./Сomponents/Footer";


function App() {
    return (


        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePages/>} />
                    <Route path="/search" element={<Search/>} />
                    <Route path="/meal/:id" element={<CocktailPage/>}/>
                    <Route path="/ingredient/:ingredient" element={<IngredientPage/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );


}

export default App;
