import PizzaItems from "./PizzaItems";
import pizzaData from "../public/data";
import "./style.css";

const Pizza = () => {
  return (
    <div className="container">
      <ul id="all-menu">
        {pizzaData.map((pizza) => (
          <PizzaItems pizzaObj={pizza} key={pizza.name}/>
        ))}
      </ul>
    </div>
  );
};

export default Pizza;
