// import { useLoaderData } from "react-router-dom";
import ProductCard from "../../ProductCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("highToLow");
  const [show, setShow] = useState(false);
  const [brand, setBrand] = useState("");
  const [cat, setCat] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [totalPage, setTotalPage] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [call, setCall] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    setCall(!call);
  };

  useEffect(() => {
    fetch(
      `https://tech-tide-server.vercel.app/products/?currentPage=${currentPage}&brand=${brand}&category=${cat}&maxPrice=${maxPrice}&minPrice=${minPrice}&search=${search}&sort=${sort}`
    )
      .then((data) => data.json())
      .then((res) => setProducts(res));
  }, [brand, cat, maxPrice, minPrice, call, sort, currentPage]);

  // https://tech-tide-server.vercel.app

  useEffect(() => {
    fetch(
      `https://tech-tide-server.vercel.app/totalProducts/?brand=${brand}&category=${cat}&maxPrice=${maxPrice}&minPrice=${minPrice}&search=${search}`
    )
      .then((data) => data.json())
      .then((res) => setTotalPage(res.count));

    //   console.log(totalPage);
  }, [brand, cat, maxPrice, minPrice, call]);

  const pages = Math.ceil(totalPage / 9);
  let makePage = [];
  for (let index = 0; index < pages; index++) {
    makePage.push(index);
  }

  // console.log(totalPage, makePage);
  // console.log(maxPrice, minPrice );
  const handlePrevious = () => {
    if (0 < currentPage) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < makePage.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="container mx-auto ">
        <div className=" ml-auto lg:ml-10">
          <h1 className="text-3xl text-orange-600 text-center mb-8">
            Tech Products...
          </h1>

          <div className=" ml-10 md:flex md:justify-between ">
            <form onSubmit={handleSearch} action="">
              <div className="flex gap-3">
                <input
                  name="Search"
                  className="px-2 py-1 border-4 h-10 w-30"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                />
                <button type="submit" className="btn btn-sm w-20 h-10 bg-orange-500 ">
                  Search
                </button>
              </div>
            </form>

            {/* sorting */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                Sorting
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li onClick={() => setSort("LowToHigh")}>
                  <a>Low to High</a>
                </li>
                <li onClick={() => setSort("highToLow")}>
                  <a>High to Low</a>
                </li>
                <li onClick={() => setSort("new")}>
                  <a>Newest first</a>
                </li>
              </ul>
            </div>

            {/* Categorization */}
            <div className="pr-28 ">
              <div
                onClick={() => setShow(!show)}
                role="button"
                className="btn m-1 relative  pr-20"
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
                        onChange={(e) => setBrand(e.target.value)}
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
                      <li onClick={() => setCat("Smartphone")}>
                        <a>Smartphone</a>
                      </li>
                      <li onClick={() => setCat("Gaming Smartphone")}>
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
                      <li
                        onClick={() => {
                          setMinPrice(1), setMaxPrice(50000);
                        }}
                      >
                        <a>1-50000</a>
                      </li>
                      <li
                        onClick={() => {
                          setMinPrice(50000), setMaxPrice(100000);
                        }}
                      >
                        <a>50000-100000</a>
                      </li>
                      <li
                        onClick={() => {
                          setMinPrice(100000), setMaxPrice(150000);
                        }}
                      >
                        <a>100000-150000</a>
                      </li>
                      <li
                        onClick={() => {
                          setMinPrice(150000), setMaxPrice(200000);
                        }}
                      >
                        <a>150000-200000</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-3 mx-2 gap-4">
            {products.map((products) => (
              <ProductCard key={products._id} products={products}></ProductCard>
            ))}
          </div>
        </div>

        {/* Pagenation */}
        <div className="join grid-cols-2 mx-auto mt-16 flex justify-center mb-16 ml-6">
          <button
            onClick={handlePrevious}
            className="join-item btn-outline  btn-sm lg:btn"
          >
            Previous page
          </button>
          <div className="join">
            {makePage.map((page, i) => (
              <button
                type="button"
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`
                                    btn btn-square w-7 lg:w-10 ${
                                      currentPage != i
                                        ? "bg-orange-600"
                                        : " bg-white "
                                    } `}
              >
                {page + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="join-item btn-outline btn-sm lg:btn"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
