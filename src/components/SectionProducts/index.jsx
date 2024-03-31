import { useState } from "react";
import Tabs from "../Tabs";
import "./styles.scss";
import Shelf from "../Shelf";
import CtaAction from "../CTA";

const SectoinProducts = () => {
  const [activeShelf, setActiveShelf] = useState("chair");

  console.log(activeShelf);

  const tabOptions = [
    {
      active: activeShelf === "chair",
      label: "Chair",
      handleClick: () => setActiveShelf("chair"),
    },
    {
      active: activeShelf === "beds",
      label: "Beds",
      handleClick: () => setActiveShelf("beds"),
    },

    {
      active: activeShelf === "sofa",
      label: "Sofa",
      handleClick: () => setActiveShelf("sofa"),
    },

    {
      active: activeShelf === "lamp",
      label: "Lamp",
      handleClick: () => setActiveShelf("lamp"),
    },
  ];

  const shelfs = {
    chair: [
      {
        img: "/img/chair-01.png",
        shadow: "/shadow-01.svg",
        title: "Sakarias Armchair",
        category: "Chair",
        price: "392",
        rating: 5,
      },
      {
        img: "/img/chair-02.png",
        shadow: "/shadow-02.svg",
        title: "Baltsar Chair",
        category: "Chair",
        price: "299",
        rating: 5,
      },
      {
        img: "/img/chair-03.png",
        shadow: "/shadow-03.svg",
        title: "Anjay Chair",
        category: "Chair",
        price: "519",
        rating: 3,
      },
      {
        img: "/img/chair-04.png",
        shadow: "/shadow-04.svg",
        title: "Nyantuy Chair",
        category: "Chair",
        price: "921",
        rating: 4,
      },
    ],
    beds: [
      {
        img: "/img/chair-03.png",
        shadow: "/shadow-03.svg",
        title: "Anjay Chair",
        category: "Chair",
        price: "519",
        rating: 3,
      },
      {
        img: "/img/chair-01.png",
        shadow: "/shadow-01.svg",
        title: "Sakarias Armchair",
        category: "Chair",
        price: "392",
        rating: 5,
      },
      {
        img: "/img/chair-02.png",
        shadow: "/shadow-02.svg",
        title: "Baltsar Chair",
        category: "Chair",
        price: "299",
        rating: 5,
      },
      {
        img: "/img/chair-04.png",
        shadow: "/shadow-04.svg",
        title: "Nyantuy Chair",
        category: "Chair",
        price: "921",
        rating: 4,
      },
    ],
    sofa: [
      {
        img: "/img/chair-01.png",
        shadow: "/shadow-01.svg",
        title: "Sakarias Armchair",
        category: "Chair",
        price: "392",
        rating: 5,
      },
      {
        img: "/img/chair-02.png",
        shadow: "/shadow-02.svg",
        title: "Baltsar Chair",
        category: "Chair",
        price: "299",
        rating: 5,
      },
      {
        img: "/img/chair-03.png",
        shadow: "/shadow-03.svg",
        title: "Anjay Chair",
        category: "Chair",
        price: "519",
        rating: 3,
      },
      {
        img: "/img/chair-04.png",
        shadow: "/shadow-04.svg",
        title: "Nyantuy Chair",
        category: "Chair",
        price: "921",
        rating: 4,
      },
    ],
    lamp: [
      {
        img: "/img/chair-01.png",
        shadow: "/shadow-01.svg",
        title: "Sakarias Armchair",
        category: "Chair",
        price: "392",
        rating: 5,
      },
      {
        img: "/img/chair-03.png",
        shadow: "/shadow-03.svg",
        title: "Anjay Chair",
        category: "Chair",
        price: "519",
        rating: 3,
      },
      {
        img: "/img/chair-04.png",
        shadow: "/shadow-04.svg",
        title: "Nyantuy Chair",
        category: "Chair",
        price: "921",
        rating: 4,
      },
      {
        img: "/img/chair-02.png",
        shadow: "/shadow-02.svg",
        title: "Baltsar Chair",
        category: "Chair",
        price: "299",
        rating: 5,
      },
    ],
  };
  return (
    <section className="section__products">
      <div className="container">
        <h2 className="subtitle">Best Selling Product</h2>
        <div className="tabs">
          <Tabs options={tabOptions} />
        </div>
        <Shelf products={shelfs[activeShelf]} />
        <div className="btn">
          <CtaAction title={"View All"} />
        </div>
      </div>
    </section>
  );
};

export default SectoinProducts;
