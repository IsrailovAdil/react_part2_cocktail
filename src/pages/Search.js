
import React, { useState} from 'react';
import Header from '../Сomponents/Header';
import Footer from "../Сomponents/Footer";
import axios from "axios";
import CocktailCard from "../Сomponents/CocktailCard";


const Search = () => {
    const [drinks, setDrinks] = useState([]);
    const [searchValue, setSearchValue] = useState("");


        const handleSearch =() => {
            axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
                .then(({data}) => setDrinks(data.drinks));
        }



    return (
        <div className={'searchPage'}>

            <div className="container1">
                <input type="text" placeholder="Поиск..."
                       className="search" aria-label="Поиск"
                       onChange={e => setSearchValue(e.target.value)}/>
                <button className="search-btn" onClick={handleSearch}>Поиск</button>
            </div>
                <CocktailCard drinks={drinks}/>

        </div>
    );
}

export default Search;
