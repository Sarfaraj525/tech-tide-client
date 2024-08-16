// import { useLoaderData } from "react-router-dom";
import ProductCard from "../../ProductCard";
import { useEffect, useState } from "react";

const Home = () => {
  //   const products = useLoaderData();
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("priceLowHigh");
  const [show, setShow] = useState(false);
  const [brand, setBrand]= useState("");
  const [cat, setCat]= useState("");
  const [minPrice, setMinPrice]= useState("");
  const [maxPrice, setMaxPrice]= useState("");
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((data) => data.json())
      .then((res) => setProducts(res));
  }, []);

  const handleSearch = (e) => {
    fetch(`http://localhost:5000/products/search/${e.target.value}`)
      .then((data) => data.json())
      .then((res) => setProducts(res));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/products/${sort}`)
      .then((data) => data.json())
      .then((res) => setProducts(res));
  }, [sort]);

  useEffect(() => {
    fetch(`http://localhost:5000/product/Categorization/?brand=${brand}&category=${cat}&maxPrice=${maxPrice}&minPrice=${minPrice}`)
      .then((data) => data.json())
      .then((res) => setProducts(res));
  }, [brand, cat, minPrice, maxPrice]);
  
  
// console.log(maxPrice, minPrice );



  return (
    <div className="min-h-lvh">
      <div className="m-20">
        <h1 className="text-6xl text-orange-600 text-center mb-8">
          Tech Products: {products.length}
        </h1>

        <div className="flex justify-between ">
          <input
            onChange={handleSearch}
            className="px-2 py-1 border-4 h-10 w-30"
            type="text"
            placeholder="Search"
          />

          {/* sorting */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Sorting
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li onClick={() => setSort("priceLowHigh")}>
                <a>Low to High</a>
              </li>
              <li onClick={() => setSort("priceHighLow")}>
                <a>High to Low</a>
              </li>
              <li onClick={() => setSort("dateNewest")}>
                <a>Newest first</a>
              </li>
            </ul>
          </div>




          {/* Categorization */}
          <div className="pr-28">
            <div
              onClick={() => setShow(!show)}
              role="button"
              className="btn m-1 relative left-12 pr-20"
            >
              Categorization
            </div>
            <ul
              className={`${
                show ? "visible" : "hidden"
              } menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute`}
            >
              <li>
                <div className="dropdown dropdown-right">

                  <div>
                    <label
                      htmlFor="HeadlineAct"
                      className="block text-sm font-medium text-gray-900"
                    >
                      
                      Brand Name
                    </label>

                    <select
                      name="HeadlineAct"
                      id="HeadlineAct"
                      onChange={(e)=>setBrand(e.target.value)
                      }
                      className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                    >
                      <option value="">Please select</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Apple">Apple</option>
                      <option value="Google">Google</option>
                      <option value="OnePlus">OnePlus</option>
                      <option value="Xiaomi">Xiaomi</option>
                      <option value="Nokia">Nokia</option>
                      <option value="Sony">Sony</option>
                      <option value="Oppo">Oppo</option>
                      <option value="Huawei">Huawei</option>
                      <option value="Realme">Realme</option>
                      <option value="Asus">Asus</option>
                      <option value="Vivo">Vivo</option>
                      <option value="ZTE">ZTE</option>
                      <option value="Microsoft">Microsoft</option>
                      <option value="Infinix">Infinix</option>
                      <option value="LG">LG</option>
                      <option value="HTC">HTC</option>
                      <option value="Lenovo">Lenovo</option>
                      <option value="Alcatel">Alcatel</option>
                      <option value="ZTE">ZTE</option>
                      <option value="TCL">TCL</option>
                      <option value="Honor">Honor</option>
                      <option value="Meizu">Meizu</option>
                      <option value="BlackBerry">BlackBerry</option>
                      <option value="Micromax">Micromax</option>
                      <option value="Karbonn">Karbonn</option>
                      <option value="Gionee">Gionee</option>
                      <option value="Lava">Lava</option>
                    </select>
                  </div>
                </div>
              </li>
              <li>


                <div className="dropdown dropdown-right">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Category Name
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li onClick={()=>setCat("Smartphone")}>
                      <a>Smartphone</a>
                      <a>Gaming Smartphone</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>


                <div className="dropdown dropdown-right">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Price Range
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li onClick={()=>{setMinPrice(1), setMaxPrice(50000)}}>
                      <a>1-50000</a>
                    </li>
                    <li onClick={()=>{setMinPrice(50000), setMaxPrice(100000)}}>
                      <a>50000-100000</a>
                    </li>
                    <li onClick={()=>{setMinPrice(100000), setMaxPrice(150000)}}>
                      <a>100000-150000</a>
                    </li>
                    <li onClick={()=>{setMinPrice(150000), setMaxPrice(200000)}}>
                      <a>150000-200000</a>
                    </li>
                  </ul>
                </div>


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
