import { MenuItem } from '../entites/entities';
import './Foods.css'
import FoodOrder from './FoodOrder'
import ima from '../images/Hamburg.jpg';
import { useContext, useState } from 'react';
import ErrorBoundary from '../services/ErrorBoundaries'
import logger from '../services/logging';
import { foodItemsContext } from '../App';


function Foods() {

    const foodItems = useContext(foodItemsContext);

    const [foodOrder, setfoodOrder] = useState(false);
    const [foodSelect, setfoodSelect] = useState<MenuItem>();
    const handleReturnToMenu = () => {
        setfoodOrder(!foodOrder);
    };

    const handleClick = (menu: MenuItem) => {
        logger.debug("El usuario quiere ordenar: "+menu.name);
        setfoodSelect(menu);
        setfoodOrder(!foodOrder);
    };

    return (
        <>
            {!foodOrder && (
                <>
                    <h4 className="foodTitle">Choose from our Menu</h4>
                    <ul className="ulFoods">
                        {foodItems.map((item) => {
                            return (
                                <li key={item.id} className="liFoods"
                                    onClick={() =>
                                        handleClick(item)}>
                                    <img
                                        className="foodImg"
                                        src={ima}
                                        alt={item.name}
                                    />
                                    <div className="foodItem">
                                        <p className="foodDesc">{item.desc}</p>
                                        <p data-testid="foodPrice" className="foodPrice">{item.price}$</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )
            }
            {foodOrder && 
            <ErrorBoundary fallback={<div>¡No nos quedan de esas hamburguesas!</div>}><FoodOrder food={foodSelect!} onReturnToMenu={handleReturnToMenu}></FoodOrder></ErrorBoundary>
            
            
            }
        </>
    );
};
export default Foods;

