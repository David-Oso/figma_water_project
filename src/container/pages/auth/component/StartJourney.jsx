import arrow from "../../../../assets/images/svg/startJourneyArrow.svg"
import "../styles/startJourney.css"

function StartJourney(){
    return(
        <div className="start_journey">
            <div className="start_journey_div_1">
                <p>Start My Journey Today</p>
            </div>
            <div className="start_journey_div_2">
                <p><img src={arrow} alt="" className="startJourneyArrow"/></p>
                <a href="/overlayOne"><p>Start My Journey Today</p></a>
            </div>
        </div>
    )
}

export default StartJourney;