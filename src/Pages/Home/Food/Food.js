import React from "react";
import './Food.scss';
import FoodImg from '../../../Assets/Images/dreamstime_0.webp';

const Food = () => {
    return (
        <>
            <div className="featured" id="Food">
                <img src={FoodImg} alt="" />
            </div>
        </>
    );
}
 
export default Food;