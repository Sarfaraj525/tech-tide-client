import { useLoaderData } from "react-router-dom";
import ProductCard from "../../ProductCard";


const Home = () => {

    const products = useLoaderData();

    return (
        <div className="min-h-lvh">
            <div className="m-20">
            <h1 className="text-6xl text-orange-600 text-center">Tech Products: {products.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
            {
                products.map(products => <ProductCard
                key={products._id}
                products={products}
                ></ProductCard>)
            }
            </div>
            </div>
        </div>
    );
};

export default Home;