
import React, { useState} from 'react';
import Header from '../Сomponents/Header';
import Footer from "../Сomponents/Footer";
import axios from "axios";
import MealCard from "../Сomponents/MealCard";


const Search = () => {
    const [meals, setMeals] = useState([]);
    const [searchValue, setSearchValue] = useState("");


        const handleSearch =() => {
            axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
                .then(({data}) => setMeals(data.meals));
        }



    return (
        <div className={'searchPage'}>
            <Header/>
            <div className="container1">
                <input type="text" placeholder="Поиск..."
                       className="search" aria-label="Поиск"
                       onChange={e => setSearchValue(e.target.value)}/>
                <button className="search-btn" onClick={handleSearch}>Поиск</button>
            </div>
                <MealCard meals={meals}/>
            <Footer/>
        </div>
    );
}

export default Search;
