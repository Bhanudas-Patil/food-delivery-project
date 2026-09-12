import './Card.css';

const Card = ({ CardData, cart, setCart }) => {
  let addToCart = product => {
    let newCart = [...cart];

    let item = newCart.find((i) => i.id === product.id);

    if (item) {
      item.qty++;
    } else {
      newCart.push({ ...product, qty: 1 });
    }
    setCart(newCart);


  };

  return (
    <div className="card-container">
      {CardData.length === 0
        ? <h1>No Item Found</h1>
        : CardData.map(i => (
          <div className="card" key={i.id}>
            <h1>{i.name}</h1>
            <img src={i.image} alt={i.name} />
            <p className="category">{i.category}</p>
            <p>{i.description}</p>
            <p>Price : &#8377; {i.price}</p>
            <button
              onClick={() => {
                addToCart(i);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default Card;
