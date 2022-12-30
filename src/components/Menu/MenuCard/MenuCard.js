import "./MenuCard.css";

const MenuCard = () => {
    return (
        <div className="MenuCard">
            <div className="MenuHeader">
                <div className="NameContainer">
                    <h2 className="MenuName">Shoyu ramen</h2>
                </div>
                <div className="WhiteSpace">H</div>
            </div>
            <ul className="IngredientList">
                <li className="Ingredient">Noodles</li>
                <li className="Ingredient">Carrot</li>
                <li className="Ingredient">Onion</li>
                <li className="Ingredient">Chicken</li>
                <li className="Ingredient">Soy sause</li>
            </ul>
        </div>
    );
}

export default MenuCard;