import React, {useEffect, useState} from 'react';
import Header from "../Сomponents/Header";
import Footer from "../Сomponents/Footer";
import axios from "axios";

const HomePages = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data})=> {
                setMeals(data.meals);
            })
    }, []);


    return (
        <div>
            <Header/>

            <div className={'block-cards '}>
                {meals.map(meal => (
                    <div key={meal.idMeal} className="card">
                        <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal}/>
                        <div className="card-body">
                            <h5 className="card-title">{meal.strMeal}</h5>
                            <p className="card-text">Category: {meal.strCategory}</p>
                            <p className="card-text">Кухня: {meal.strArea}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>


    );
};

export default HomePages;



