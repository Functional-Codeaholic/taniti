/**
 * use
 * const {siteOwner, siteUrl} = require('../../../assets/_vars');
 * to include any of these vars
 */


let screenWidth = Number(window.innerWidth);
let Device = "";

switch (true) {
    case screenWidth < 768:
        // screen widths less than 768 will be considered Mobile
        Device = "Mobile";
        break;
    case screenWidth < 1024:
        // screen widths greater than 767 and less than 1024 will be considered Tablets and Small Laptops
        Device = "Tablet";
        break;
    case screenWidth < 1920:
        // screen widths greater than 1023 and less than 1920 will be considered SD Displays up to 1080p
        Device = "SD";
        break;
    case screenWidth < 3840:
        // screen widths greater than 1919 and less than 3840 will be considered HD Displays between 1080p and 4k
        Device = "HD1080";
        break;
    default:
        // screen widths greater than 3839 will be considered 4k 
        Device = "HD4K";
        break;
}



export { Device };