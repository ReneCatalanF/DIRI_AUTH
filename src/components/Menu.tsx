import './Foods.css'
import { useContext } from 'react';
import { foodItemsContext } from '../App';


function Menus() {

    const foodItems = useContext(foodItemsContext);

    return (
        <>
          <h4 className="subTitle">Menús</h4>
          <ul className="ulApp">
            {foodItems.map((item) => {
              return (
                <li key={item.id} className="liApp">
                  <p>{item.name}</p><p>#{item.quantity}</p>
                </li>
              );
            })}
          </ul>
        </>
    );
};
export default Menus;

