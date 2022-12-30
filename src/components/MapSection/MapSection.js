import "./MapSection.css";

const MapSection = () => {

    return (
        <div className="MapSection">
            <div className="MapHeader">
                <h2>Where to find us</h2>
            </div>
            <iframe className="Mapa" title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.956825674855!2d-58.544237184758984!3d-34.57995898046571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb77769cd90ad%3A0xe4b9e10b3579ce93!2sBartolom%C3%A9%20Mitre%204244%2C%20B1650%20San%20Mart%C3%ADn%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1672075521724!5m2!1ses-419!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default MapSection;