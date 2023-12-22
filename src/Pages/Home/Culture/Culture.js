import React from "react";
import './Culture.scss';
import Dance from '../../../Assets/Images/Tonga_0.webp';

const Culture = () => {
    return (
        <>
            <div className="featured" id="Culture">
                <a href="/TanitianCulture"><img src={Dance} alt="" /></a>
                
            </div>
        </>
    );
}
 
export default Culture;