import image from "../../../../assets/images/svg/dottedBox.svg";
import "../styles/overlay.css";
import "../styles/sass.scss";


function OverlayOne(){
return(
    <div className="over_lay">
        <img src={image} alt="dottedBox" className="dottedBoxImage"/>
    </div>
    )
}

export default OverlayOne;