import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "../App.css";

// npm install react-infinite-scroll-component

const LIMIT = 12;

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Initial Load
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
      );

      const data = await response.json();

      setProducts((prev) => [...prev, ...data.products]);

      const newSkip = skip + LIMIT;
      setSkip(newSkip);

      if (newSkip >= data.total) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Infinite Product Catalog</h1>

      <InfiniteScroll
        dataLength={products.length}
        next={loadProducts}
        hasMore={hasMore}
        loader={<h3>Loading Products...</h3>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>No More Products</b>
          </p>
        }
      >
        <div className="product-grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />

              <h3>{product.title}</h3>

              <p>${product.price}</p>

              <p>{product.category}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
