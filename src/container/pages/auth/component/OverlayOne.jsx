import image from "../../../../assets/images/svg/dottedBox.svg";
import "../styles/overlay.css";
import "../styles/sass.scss";


function OverlayOne(){
return(
    <div className="over_lay">
        <a href="/overlayTwo"><img src={image} alt="dottedBox" className="dottedBoxImage"/></a>
    </div>
    )
}

export default OverlayOne;