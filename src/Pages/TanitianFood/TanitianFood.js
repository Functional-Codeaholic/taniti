import React from "react";
import './TanitianFood.scss';
import Fish from '../../Assets/Images/fish.jpg';

const TanitianFood = () => {
    return (
        <>
            <h1>Tanitian Food</h1>
            <h2>Tanitian National Dish - I'a Kulimi Tipolo</h2>
            <img src={Fish} alt="Lemon Cream Fish" />
            <p>
                I'a Kulimi Tipolo - or Lemon Cream Fish is the national dish of Taniti. 
                This succulent white fish is topped and filled with lemon slices, drenched
                in a creamy, seasoned cocunut cream sauce, and wrapped in banana leaves,
                before being roasted to perfection.
            </p>
        </>
    );
}
 
export default TanitianFood;