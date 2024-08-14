import React from 'react';

const CocktailCard = ({ drinks }) => {
    return (
        <div className="block-cards">
            {drinks && drinks.length > 0 ? (
                drinks.map(drink=>
                    <div key={drink.idDrink} className="card">
                        <img src={drink.strDrinkThumb} className="card-img-top" alt={drink.strdrink}/>
                        <div className="card-body">
                            <h5 className="card-title">{drink.strDrink}</h5>
                            <p className="card-text">Category: {drink.strCategory}</p>
                        </div>
                    </div>
                )
            ) : (
                <p>Коктейл не найден</p>
            )}
        </div>
    );
}

export default CocktailCard;
