// import { useLoaderData } from "react-router-dom";
import ProductCard from "../../ProductCard";
import { useEffect, useState } from "react";

const Home = () => {
//   const products = useLoaderData();
 const [products, setProducts]= useState([]);
 useEffect(() =>{
    fetch('http://localhost:5000/products')
    .then(data=>data.json())
    .then(res=> setProducts(res)
    );
 },[])
  
const handleSearch = e=> {
    fetch(`http://localhost:5000/products/search/${e.target.value}`)
    .then(data=>data.json())
    .then(res=> setProducts(res));
}
  return (
    <div className="min-h-lvh">
      <div className="m-20">
        <h1 className="text-6xl text-orange-600 text-center">
          Tech Products: {products.length}
        </h1>
        <div>
            <input onChange={handleSearch} className="px-2 py-1 border-4" type="text" placeholder="Search"/>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
            Categorization
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {products.map((products) => (
            <ProductCard key={products._id} products={products}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
