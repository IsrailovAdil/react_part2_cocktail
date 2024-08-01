import React from 'react';
import Header from "../Сomponents/Header";
import MealCard from "../Сomponents/MealCard";
import Footer from "../Сomponents/Footer";

const HomePages = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row align-items-start">

                    <MealCard/>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default HomePages;