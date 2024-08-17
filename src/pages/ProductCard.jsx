

const ProductCard = ({products}) => {

    const {
        ProductName, ProductImage, Description, PriceInTaka, Category, Ratings, ProductCreationDate, ProductCreationTime} = products;

    return (
        <div className="card bg-base-100 w-full lg:w-96 shadow-xl">
  <figure>
    <img
      src={ProductImage}
      alt="Mobile" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Name: {ProductName}
      <div className="badge badge-secondary bg-orange-600">{Ratings}</div>
    </h2>
    <p>{Description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{Category}</div>
      <div className="badge badge-outline">{PriceInTaka}/=</div>
    </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Creation Date: {ProductCreationDate}</div>
      <div className="badge badge-outline">{ProductCreationTime}</div>
    </div>
  </div>
</div>
    );
};

export default ProductCard;