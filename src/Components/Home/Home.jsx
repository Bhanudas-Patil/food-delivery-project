import Bhel from "../../assets/Bhel.jpg";
import Burger from "../../assets/Burger.jpeg";
import CheeseBurger from "../../assets/cheese Burger.jpg";
import DalRice from "../../assets/dalRice.jpg";
import Dosa from "../../assets/Dosa.jpg";
import Fries from "../../assets/Fries.jpg";
import GulabJamun from "../../assets/gulabJamun.jpg";
import Idli from "../../assets/idli.jpg";
import PaneerTikka from "../../assets/paneerTikka.webp";
import Pasta from "../../assets/pasta.jpg";
import Rasmalai from "../../assets/rasmalai.jpeg";
import Thali from "../../assets/Thali.jpg";
import PanerTikka from "../../assets/PaneerTikka.jpg";
import Pizza from "../../assets/Pizza.jpg";
import Pulav from "../../assets/Pulav.jpg";
import Card from "../Card/Card";
import "./Home.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Home = ({ cart, setCart }) => {
  let [search, setSearch] = useState("");

  let CardData = [
    {
      id: 1,
      name: "Bhel",
      image: Bhel,
      price: 80,
      category: "Chaat",
      description: "Crispy puffed rice mixed with vegetables, chutneys, and sev.",
    },
    {
      id: 2,
      name: "Burger",
      image: Burger,
      price: 160,
      category: "Fast Food",
      description: "Juicy vegetable patty layered with fresh salad and sauces.",
    },
    {
      id: 3,
      name: "Cheese Burger",
      image: CheeseBurger,
      price: 220,
      category: "Fast Food",
      description: "A crispy patty topped with melted cheese, lettuce, and sauces.",
    },
    {
      id: 4,
      name: "Dal Rice",
      image: DalRice,
      price: 180,
      category: "Main Course",
      description: "Comforting yellow dal served with steamed basmati rice.",
    },
    {
      id: 5,
      name: "Masala Dosa",
      image: Dosa,
      price: 140,
      category: "South Indian",
      description: "Crispy rice crepe filled with spiced potato masala, with chutney and sambar.",
    },
    {
      id: 6,
      name: "French Fries",
      image: Fries,
      price: 110,
      category: "Sides",
      description: "Golden, crispy potato fries seasoned with a light pinch of salt.",
    },
    {
      id: 7,
      name: "Gulab Jamun",
      image: GulabJamun,
      price: 100,
      category: "Dessert",
      description: "Soft milk-solid dumplings soaked in fragrant sugar syrup.",
    },
    {
      id: 8,
      name: "Idli",
      image: Idli,
      price: 90,
      category: "South Indian",
      description: "Steamed, fluffy rice cakes served with coconut chutney and sambar.",
    },
    {
      id: 9,
      name: "Paneer Tikka",
      image: PaneerTikka,
      price: 260,
      category: "Starters",
      description: "Tandoori-marinated paneer grilled with onions and bell peppers.",
    },
    {
      id: 10,
      name: "Pasta",
      image: Pasta,
      price: 240,
      category: "Italian",
      description: "Penne pasta tossed in a rich tomato sauce with herbs and vegetables.",
    },
    {
      id: 11,
      name: "Rasmalai",
      image: Rasmalai,
      price: 150,
      category: "Dessert",
      description: "Soft cottage-cheese dumplings served in chilled saffron milk.",
    },
    {
      id: 12,
      name: "Thali",
      image: Thali,
      price: 280,
      category: "Main Course",
      description: "A wholesome Indian meal with dal, vegetables, rice, roti, and dessert.",
    },
    {
      id: 13,
      name: "Butter Paneer",
      image: PanerTikka,
      price: 290,
      category: "Main Course",
      description: "Paneer cooked in a creamy tomato and butter gravy with mild spices.",
    },
    {
      id: 14,
      name: "Pizza",
      image: Pizza,
      price: 320,
      category: "Italian",
      description: "Hand-tossed pizza topped with mozzarella, vegetables, and Italian herbs.",
    },
    {
      id: 15,
      name: "Pulav",
      image: Pulav,
      price: 200,
      category: "Main Course",
      description: "Fragrant basmati rice cooked with seasonal vegetables and whole spices.",
    },
  ];

  let filterdata = CardData.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>

      <div className="search">
        <div className="searchBar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Food Item"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </div>
      </div>


      <div>
        <Card CardData={filterdata} cart={cart} setCart={setCart} />
      </div>
    </>
  );
};

export default Home;
