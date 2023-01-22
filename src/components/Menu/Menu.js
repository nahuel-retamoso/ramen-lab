import { forwardRef } from "react";
import "./Menu.css";
import MenuCard from "./MenuCard/MenuCard";

const Menu = ({}, ref) => {
    return (
        <div ref={ref} className="Menu">
            <h1 className="MenuTitle">Explore Our Delicious and Authentic Ramen Dishes</h1>
            <div className="MenuContainer">
                <MenuCard title={'Shoyu Ramen'} ingredients={['Chicken or pork broth', 'Soy sauce', 'Sake', 'Mirin', 'Kombu seaweed', 'Onion', 'Garlic', 'Ginger', 'Ramen noodles', 'Meat', 'Vegetables']} />
                <MenuCard title={'Miso Ramen'} ingredients={['Chicken or pork broth', 'Miso paste', 'Sake', 'Mirin', 'Kombu seaweed', 'Onion', 'Garlic', 'Ginger', 'Ramen noodles', 'Meat', 'Vegetables']} />
                <MenuCard title={'Tonkotsu Ramen'} ingredients={['Pork bone broth', 'Sake', 'Mirin', 'Kombu seaweed', 'Onion', 'Garlic', 'Ginger', 'Ramen noodles', 'Meat', 'Vegetables']} />
            </div>
        </div>
    );
}

export default forwardRef(Menu);