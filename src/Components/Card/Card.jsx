import './Card.css'

const Card = ({ CardData = [] }) => {
  return (
    <div className="card-container">
      {CardData.length === 0 ? (
        <h1>No Item Found</h1>
      ) : (
        CardData.map((i) => (
          <div className="card" key={i.id}>
            <h1>{i.name}</h1>
            <img src={i.image} alt={i.name} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>Price : &#8377; {i.price}</p>
            <button>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
