import { useEffect, useState } from "react";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const showProducts = products.slice(0, visibleProducts);
  const handleShowMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };
  return (
    <div>
      <h2>Total Products : {products.length}</h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {showProducts.map((product, index) => (
            <div key={index}>
              <div className="border-4 border-blue-300 w-3/4   mx-auto my-4 rounded-xl px-8 py-5">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <img src={product.image} width={200} alt="" />
                  </div>
                  <h3>Product Name : {product.name}</h3>
                  <h4>Product Category : {product.category}</h4>
                  <p>Price : $ {product.retailPrice}</p>
                  <button className="bg-yellow-400 p-2 rounded-lg">Buy</button>
                  <button className="ml-4 bg-orange-600 p-2 rounded-lg text-white">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          {visibleProducts < products.length && (
            <button
              className="bg-blue-700 p-4 text-white my-5 rounded-lg"
              onClick={handleShowMoreProducts}
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Store;
