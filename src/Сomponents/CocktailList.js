import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const CocktailList = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        axios('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            .then(({data})=> {
                setDrinks(data.drinks);
            })
    }, []);


    return (
            <div className={'block-cards'}>
                {drinks.map(drink => (
                    <div key={drink.idDrink} className="card">
                        <img src={drink.strDrinkThumb} className="card-img-top" alt={drink.strDrink}/>
                        <div className="card-body">
                            <h5 className="card-title">{drink.strDrink}</h5>
                            <p className="card-text">Category: {drink.strCategory}</p>
                            <Link className={'btn btn-primary'} to={`/meal/${drink.idDrink}`}>
                                Подробнее
                            </Link>
                        </div>
                    </div>
                )).slice(0,12)}
        </div>
    );
};

export default CocktailList;