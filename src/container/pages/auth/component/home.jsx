import "../styles/home.css";
import logo from "../../../../assets/images/svg/backgroundLogo.svg";
import arrow from "../../../../assets/images/svg/smallArrow.svg";

import picture1 from "../../../../assets/images/svg/overlayTwoTopImage.svg";
import picture2 from "../../../../assets/images/svg/overlayTwoDownImage.svg";
import picture3 from "../../../../assets/images/svg/overlayThreePicture.svg"
import {Link} from "react-router-dom"

function  Home(){
    return (
        <div className="Home">
            <div className="home_top_div">
                <div className="contact_inner_div_1">
                        <a href="#"><img src={logo} alt="logo" className="contactLogo"/></a>
                        <div className="navigation_div">
                            <a href="/" className="nav_home">Home</a>
                            <a href="/contact" className="nav_contact">Contact</a>

                            <a href="./OverlayTwo.jsx" className="nav_overlay">Tours</a>
                        </div>
                        <a href="./StartJourney.jsx" className="nav_start_journey"> <img src={arrow} alt="arrow" className="contact_arrow"></img>Start a Journey</a>
                </div>              
                <div className="discover_div">
                    <h1 className="discover_the_water">
                        Discover the water
                    </h1>
                    <p className="discover_the_water_p">
                        From prestine waters, to majestic forests  --We've got it all.
                    </p> 
                </div>
                <div className="home_inner_bottom_left_div">
                </div>

                <div className="transparent_div">
                </div>

                <div className="home_inner_bottom_right_div">
                    <h3>Sea Fishing</h3>
                    <p>Do you love fishing? we offer some of the best fishing spots around the world</p>
                    <h3>Hang Gliding</h3>
                    <p>Do you love fishing? we offer some of the best fishing spots around the world</p>
                    <h3>Parasailing</h3>
                    <p>Do you love fishing? we offer some of the best fishing spots around the world</p>
                </div>

                <div className="home_bottom_div">
                    <div className="home_picture1">
                        <img src={picture1} alt="nature" className="picture1"/>
                        <div className="picture1_div">
                            <h3>Punta Monita</h3>
                            <p>
                                From prestine waters, to majestic forests  --We've got it all. Start your journey today for 50% off.
                            </p> 
                        </div>
                    </div>

                    <div className="home_picture2">
                    <img src={picture2} alt="nature" className="picture2"/>
                        <h3>Punta Monita</h3>
                        <p>
                            From prestine waters, to majestic forests  --We've got it all. Start your journey today for 50% off.
                        </p> 
                    </div>

                    <div className="home_picture3">
                    <img src={picture3} alt="nature" className="picture3"/>
                        <h3>Punta Monita</h3>
                        <p>
                            From prestine waters, to majestic forests  --We've got it all. Start your journey today for 50% off.
                        </p> 
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home;