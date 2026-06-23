import { useEffect, useState, useCallback } from "react";
import { List } from "react-window";
import { useInfiniteLoader } from "react-window-infinite-loader";

// npm install react-window react-window-infinite-loader

const PAGE_SIZE = 20;

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  // ----------------------------
  // Load products from API
  // ----------------------------
  const loadMoreRows = useCallback(async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${products.length}`,
      );

      const data = await response.json();

      setProducts((prev) => [...prev, ...data.products]);

      setTotal(data.total);
    } catch (err) {
      console.error(err);
    }
  }, [products.length]);

  // ----------------------------
  // Initial Load
  // ----------------------------
  useEffect(() => {
    loadMoreRows();
  }, []);

  // ----------------------------
  // Is row already loaded?
  // ----------------------------
  const isRowLoaded = (index) => {
    return index < products.length;
  };

  // ----------------------------
  // Total row count
  // ----------------------------
  const rowCount =
    products.length < total ? products.length + 1 : products.length;

  // ----------------------------
  // Infinite Loader Hook
  // ----------------------------
  const onRowsRendered = useInfiniteLoader({
    isRowLoaded,
    loadMoreRows,
    rowCount,
  });

  // ----------------------------
  // Row Renderer
  // ----------------------------
  const Row = ({ index, style }) => {
    if (!isRowLoaded(index)) {
      return (
        <div style={style} className="product-row">
          Loading...
        </div>
      );
    }

    const product = products[index];

    return (
      <div style={style} className="product-row">
        <img src={product.thumbnail} alt={product.title} />

        <div className="product-details">
          <h3>{product.title}</h3>

          <p>${product.price}</p>

          <p>{product.category}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Virtualized Infinite Product List</h1>

      <div className="list-container">
        <List
          height={600}
          width={1000}
          rowCount={rowCount}
          rowHeight={120}
          rowComponent={Row}
          rowProps={{}}
          onRowsRendered={onRowsRendered}
        />
      </div>
    </div>
  );
}
