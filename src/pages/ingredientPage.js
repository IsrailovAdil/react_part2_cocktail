import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const IngredientPage = () => {
    const { ingredient } = useParams();
    const [drink, setDrink] = useState([]);

    useEffect(() => {
        console.log(`Fetching data for ingredient: ${ingredient}`);
        axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`)
            .then(({ data }) => {
                setDrink(data.drinks || []);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [ingredient]);

    console.log(drink)


return (


    <div>
        <h1 className={'text-ingredient'}>Коктейл с ингридиентам: {ingredient}.</h1>
        <h5 className={'text-ingredient'}> Количества: {drink.length} </h5>
        <div className='block-cards-ing'>
            {drink.map(drink => (
                <div key={drink.idDrink} className="card">
                    <img src={drink.strDrinkThumb} className="card-img-top" alt={drink.strDrink}/>
                    <div className="card-body">
                        <h5 className="card-title">{drink.strDrink}</h5>
                        <Link className={'btn btn-primary'} to={`/meal/${drink.idDrink}`}>
                            Подробнее
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default IngredientPage;