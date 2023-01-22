import "./MenuCard.css";

const MenuCard = ({title, ingredients}) => {
    return (
        <div className="MenuCard">
            <div className="MenuHeader">
                <div className="NameContainer">
                    <h2 className="MenuName">{title}</h2>
                </div>
                <div className="WhiteSpace">麺</div>
            </div>
            <ul className="IngredientList">
                {ingredients.map((ingredient, index) => {return (<li key={index} className="IngredientItem">{ingredient}</li>)})}
            </ul>
        </div>
    );
}

export default MenuCard;