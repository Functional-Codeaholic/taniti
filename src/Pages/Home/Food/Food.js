import React from "react";
import './Food.scss';
import FoodImg from '../../../Assets/Images/dreamstime_0.webp';

const Food = () => {
    return (
        <>
            <div className="featured" id="Food">
                <a href="/TanitianFood"><img src={FoodImg} alt="" /></a>
                
            </div>
        </>
    );
}
 
export default Food;