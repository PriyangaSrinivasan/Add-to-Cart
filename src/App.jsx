import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";


const App = () => {
  let data = [
    {
      sale: "",
      productname: "Fancy Product",
      price1: "$40.00",
      price2: "$80.00",
    },
    {
      sale: "Sale",
      productname: "Special Item",
      discount: "true",
      rating: "true",
      price1: "$20.00",
      price2: "$18.00",
    },
    {
      sale: "Sale",
      productname: "Sale Item",
      price1: "$50.00",
      price2: "$25.00",
    },
    {
      sale: "",
      productname: "Popular Item",
      rating: "true",
      price1: "$40.00",
    },
    {
      sale: "Sale",
      productname: "Sale Item",
      discount: "true",
      price1: "$50.00",
      price2: "$25.00",
    },
    {
      sale: "",
      productname: "Fancy Product",
      price1: "$120.00",
      price2: "$280.00",
    },
    {
      sale: "Sale",
      productname: "Special Item",
      discount: "true",
      rating: "true",
      price1: "$20.00",
      price2: "$18.00",
    },
    {
      sale: "Sale",
      productname: "Special Item",
      discount: "true",
      rating: "true",
      price1: "$40.00",
    },
  ];
  const [count, setcount] = useState(0);
  return (
    <>
      <Navbar count={count} />
      <Header />
      <Card data={data} setcount={setcount} count={count}/>
      <Footer />
    </>
  );
};

export default App;
