import pizzaData from "../public/data";
import "./style.css"

const Pizza = () => {
  const pizzaMenu = [...pizzaData];

  return (
    <div className="container">
      <h4>This is our pizza menu</h4>
      <ul id="all-menu">
        {pizzaMenu.map((m) => (
          <li key={m.id}>
            {m.name} <br /> <br />
            <img src={`${m.photoName}`} alt={`${m.name}`} /> <br />
            {m.ingredients}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizza;
