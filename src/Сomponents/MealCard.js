import React from 'react';

const MealCard = ({ meals }) => {
    return (
        <div className="block-cards">
            {meals && meals.length > 0 ? (
                meals.map(meal => (
                    // <div key={meal.idMeal} className="meal-card">
                    //     <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
                    //     <h3 className="meal-title">{meal.strMeal}</h3>
                    //     <p className="meal-category">Категория: {meal.strCategory}</p>
                    //     <p className="meal-area">Кухня: {meal.strArea}</p>
                    //     <a href={meal.strSource} className="meal-link" target="_blank" rel="noopener noreferrer">Подробнее</a>
                    // </div>
                    <div key={meal.idMeal} className="card">
                        <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal}/>
                        <div className="card-body">
                            <h5 className="card-title">{meal.strMeal}</h5>
                            <p className="card-text">Category: {meal.strCategory}</p>
                            <p className="card-text">Кухня: {meal.strArea}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Блюд не найдено</p>
            )}
        </div>
    );
}

export default MealCard;
