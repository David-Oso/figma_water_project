import "../styles/overlayTwo.css"
import overlayTwoTopImage from "../../../../assets/images/svg/overlayTwoDownImage.svg"
import overlayTwoDownImage from "../../../../assets/images/svg/overlayTwoTopImage.svg"

function OverlayTwo(){
    return (
        <div className="overlayTwo">
            <h2>Choose your Destination</h2>
            <div className="overlay_two_div">
                <div className="overlay_two_content_div">
                    <a href="/"><img src={overlayTwoTopImage} alt="nature" className="overlayTwoTopImage"/></a>
                    <div className="overlay_two_text_div">
                        <h3>
                            Punta Monita
                        </h3>
                        <p>
                            From pristine waters, to majestic forests --We've got it all. start you journey for 50% off!
                        </p>
                    </div>
                </div>
                <div className="overlay_two_content_div_2">
                    <a href="/"><img src={overlayTwoDownImage} alt="nature" className="overlayTwoDownImage"/></a>
                    <div className="overlay_two_text_div_2">
                        <h3>
                            Punta Monita
                        </h3>
                        <p>
                            From pristine waters, to majestic forests --We've got it all. start you journey for 50% off!
                        </p>
                    </div>
                </div>            
            </div>
        </div>
    )
}
export default OverlayTwo;