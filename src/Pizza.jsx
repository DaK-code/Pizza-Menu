import pizzaData from "../public/data";
import "./style.css"

const Pizza = () => {
  const pizzaMenu = [...pizzaData];

  return (
    <div className="container">
      <ul id="all-menu">
        {pizzaMenu.map((m) => (
        
          <li  key={m.id} className={m.soldOut? "soldOut": "none"}>
            <img src={`${m.photoName}`} alt={`${m.name}`} />

            <span className="description">
              <p className="menuName">{m.name}</p>
              <p className="ingredient">{m.ingredients}</p>
              {m.soldOut ? <p>Sold Out</p> : <p>{m.price}$</p>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizza;
