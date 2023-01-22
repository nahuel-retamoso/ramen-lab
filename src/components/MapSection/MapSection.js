import { forwardRef } from "react";
import "./MapSection.css";

const MapSection = ({}, ref) => {

    return (
        <div ref={ref} className="MapSection">
            <div className="MapHeader">
                <h2>Where to find us</h2>
            </div>
            
            <iframe className="Mapa" title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5677.520157893133!2d-58.53732232626137!3d-34.57544618973434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb776b321c597%3A0x7bd8d5aa05d35e87!2sPlaza%20San%20Mart%C3%ADn!5e0!3m2!1ses-419!2sar!4v1674418970885!5m2!1ses-419!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default forwardRef(MapSection);