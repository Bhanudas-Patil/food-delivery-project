import './Card.css'

const Card = ({ CardData }) => {
  return (
    <div className="card-container">
      {CardData.map((i) => {
        return (
          <div className="card" key={i.id}>
            <h1>{i.name}</h1>
            <img src={i.image}></img>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>Price : &#8377; {i.price}</p>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
