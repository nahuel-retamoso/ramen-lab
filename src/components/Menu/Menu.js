import "./Menu.css";
import MenuCard from "./MenuCard/MenuCard";

const Menu = () => {
    return (
        <div className="Menu">
            <h1 className="Text">¡No te pierdas nuestras deliciosas opciones de ramen!</h1>
            <div className="MenuContainer">
                <MenuCard />
                <MenuCard />
                <MenuCard />
            </div>
        </div>
    );
}

export default Menu;