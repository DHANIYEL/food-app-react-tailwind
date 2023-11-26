import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeadLineCards from "./components/HeadLineCards";
import FoodsCategory from "./components/FoodsCategory";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadLineCards />
      <FoodsCategory />
      <Category />
    </div>
  );
}

export default App;
