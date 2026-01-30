
import Pizza from "./Pizza";

const PizzaItems = ({pizzaObj}) => {
  return (
    <>
        <li  className={pizzaObj.soldOut ? "soldOut" : "none"}>
          <img src={`${pizzaObj.photoName}`} alt={`${pizzaObj.name}`} />

          <span className="description">
            <p className="menuName">{pizzaObj.name}</p>
            <p className="ingredient">{pizzaObj.ingredients}</p>
            {pizzaObj.soldOut ? <p>Sold Out</p> : <p>{pizzaObj.price}$</p>}
          </span>
        </li>
      
    </>
  );
};

export default PizzaItems;
