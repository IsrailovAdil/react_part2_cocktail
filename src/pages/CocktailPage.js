import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const CocktailPage = () => {
    const { id } = useParams();
    const [drink, setDrink] = useState({});
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(({ data }) => {
                const drinkData = data.drinks[0];
                setDrink(drinkData);

                let allIngredients = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient = drinkData[`strIngredient${i}`];
                    const measure =drinkData[`strMeasure${i}`];
                    if (ingredient && measure) {
                        allIngredients.push({ ingredient, measure });
                    }
                }

                const sortIngredients = allIngredients.slice(0, 8); // Keep top 8 ingredients
                setIngredients(sortIngredients);
            });
    }, [id]);

    return (
        <div>

            <div className='container'>
                <div key={drink.idDrink} className="wrapper">
                    <h5 className="card-title">{drink.strDrink}</h5>
                    <div className='wrapper-row'>
                        <img src={drink.strDrinkThumb} className="solo-meal-img" alt={drink.strDrink}/>
                    </div>
                    <div className="row">
                        {ingredients.map(({ingredient, measure}, index) => (
                            <div key={index} className="col-3 card-container">
                                <div className="card-ingredient">
                                    <Link to={`/ingredient/${ingredient}`}>

                                    <img
                                        src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
                                        className="card-img-top p-3"
                                        alt={ingredient}
                                    />
                                    </Link>
                                    <div className="wrapper-body">

                                        <h3 className="card-title">{ingredient}</h3>
                                        <span className={'text-measure'}>{measure}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className='wrapper-info'>
                           <h5>Инструкция: </h5>
                        {drink.strInstructions}
                    </p>


                </div>

            </div>

        </div>
    );
};

export default CocktailPage;
