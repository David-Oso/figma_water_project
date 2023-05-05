import "../styles/contact.css";
import logo from "../../../../assets/images/svg/backgroundLogo.svg";
import arrow from "../../../../assets/images/svg/smallArrow.svg";

function Contact(){
    return (
        <div className="contact">
            <div className="contact_div1">
                <div className="contact_inner_div_1">
                    <a href="/"><img src={logo} alt="logo" className="contactLogo"/></a>
                    <div className="navigation_div">
                        <a href="/" className="nav_home">Home</a>
                        <a href="/contact" className="nav_contact">Contact</a>
                        <a href="/overlayTwo" className="nav_overlay">Tours</a>
                    </div>
                    <a href="/startJourney" className="nav_start_journey"> <img src={arrow} alt="arrow" className="contact_arrow"></img>Start a Journey</a>
                </div>
                <div className="contact_inner_div_2">
                    <h1>Contact</h1>
                    <p>From prestine waters to majestic forest, We've got it all.</p>

                </div>
            </div>

        </div>
    );
}

export default Contact;