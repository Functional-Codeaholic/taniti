import React from "react";
import './Credits.scss';

const Credits = () => {
    return (
        <>
            <div className="credits">
                This site is not intended to be a real marketing website for any existing entity. It was created as a school 
                project by and for Brian Quinney. Artwork not created by Brian Quinney is the property of the credited owners, 
                and no license or rights have been given unless otherwise stated on the owner's website.
                <br />Artwork credits can be found by cross-referencing the name given to the artwork on this site with the url listed.
                <h4>Video sources:</h4>
                <ul>
                    <li>Promo video from Hero section - samoa_0: <a href="https://www.samoa.travel/Content/Images/home-vids/1950x832%20Website%20Desktop%20Homepage%20video.mp4">Samoa.travel</a></li>
                </ul>
                <h4>Image sources:</h4>
                <ul>
                    <li>logo: created by Brian Quinney of <a href="https://functionalcodeaholic.com">Functional Codeaholic</a></li>
                    <li>hamburger: created by Brian Quinney of <a href="https://functionalcodeaholic.com">Functional Codeaholic</a></li>
                    <li>Social Icons: created by Brian Quinney of <a href="https://functionalcodeaholic.com">Functional Codeaholic</a>, using logos of respective companies</li>
                    <li>RSS Icon: created by Brian Quinney of <a href="https://functionalcodeaholic.com">Functional Codeaholic</a> based on standard rss icon</li>
                    <li>Myguide_0: <a href="https://images.myguide-cdn.com/costarica/companies/from-el-castillo-lake-arenal-kayak-sup-tour-with-snacks/large/from-el-castillo-lake-arenal-kayak-sup-tour-with-snacks-1675963.jpg">MyGuide-cdn.com</a></li>
                    <li>tonga_0: <a href="https://tongatourism.travel/wp-content/uploads/2022/08/%F0%9F%92%80-43.jpg">TongaTourism.travel</a></li>
                    <li>Tahiti_2: <a href="https://www.tahiti.com/images1/banners/home_carousel_04.jpg">Tahiti.com</a></li>
                    <li>dreamstime_0: <a href="https://thumbs.dreamstime.com/z/cook-islanders-people-eat-traditional-food-group-south-pacific-islands-banning-foreign-junk-food-imports-favour-111889549.jpg">Thumbs.DreamsTime.com</a></li>
                    <li>Tahiti_4: <a href="https://www.tahiti.com/images1/banners/home_carousel_02.jpg">Tahiti.com</a></li>
                    <li>Hawaii_1: <a href="https://www.gohawaii.com/sites/default/files/background-images/iStock-490484446.jpeg">GoHawaii.com</a></li>
                    <li>Weather Icons: <a href="https://www.deviantart.com/vclouds/art/VClouds-Weather-Icons-179152045">DeviantArt</a></li>
                </ul>
            </div>
            <div className="copyright">
                &copy; 2023 <a href="https://functionalcodeaholic.com">Functional Codeaholic</a>. All Rights reserved.
            </div>
            <div className="license">
                All content not credited to other sources is the exclusive property of Brian Quinney and <a href="https://functionalcodeaholic.com">Functional Codeaholic</a>.
                No license is given for any duplication without express, written consent by Brian Quinney.
            </div>
        </>
    );
}
 
export default Credits;