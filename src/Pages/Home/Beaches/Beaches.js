import React from "react";
import './Beaches.scss';
import beach from '../../../Assets/Images/Tahiti_4.webp';

const Beaches = () => {
    return (
        <>
            <div className="featured" id="Beaches">
                <a href="/TanitianBeaches"><img src={beach} alt="" /></a>
                
            </div>
        </>
    );
}
 
export default Beaches;