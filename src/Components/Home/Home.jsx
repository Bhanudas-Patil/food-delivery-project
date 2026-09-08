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

const Home = () => {
  let [search, setSearch] = useState("");

  let CardData = [
    {
      id: 1,
      name: "Bhel",
      image: Bhel,
      price: 300,
    },
    {
      id: 2,
      name: "Burger",
      image: Burger,
      price: 300,
    },
    {
      id: 3,
      name: "Cheese Burger",
      image: CheeseBurger,
      price: 300,
    },
    {
      id: 4,
      name: "Dal Rice",
      image: DalRice,
      price: 300,
    },
    {
      id: 5,
      name: "Masala Dosa",
      image: Dosa,
      price: 300,
    },
    {
      id: 6,
      name: "French Fries",
      image: Fries,
      price: 300,
    },
    {
      id: 7,
      name: "Gulab Jamun",
      image: GulabJamun,
      price: 300,
    },
    {
      id: 8,
      name: "Idli",
      image: Idli,
      price: 300,
    },
    {
      id: 9,
      name: "Paneer Tikka",
      image: PaneerTikka,
      price: 300,
    },
    {
      id: 10,
      name: "Pasta",
      image: Pasta,
      price: 300,
    },
    {
      id: 11,
      name: "Rasmalai",
      image: Rasmalai,
      price: 300,
    },
    {
      id: 12,
      name: "Thali",
      image: Thali,
      price: 300,
    },
    {
      id: 13,
      name: "Butter Paneer",
      image: PanerTikka,
      price: 300,
    },
    {
      id: 14,
      name: "Pizza",
      image: Pizza,
      price: 300,
    },
    {
      id: 15,
      name: "Pulav",
      image: Pulav,
      price: 300,
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
        <Card CardData={filterdata}> </Card>
      </div>
    </>
  );
};

export default Home;
