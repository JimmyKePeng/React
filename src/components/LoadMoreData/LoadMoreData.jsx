import React, { useEffect, useState } from "react";
import DataBox from "./DataBox";
function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [count, setCount] = useState(0);
  const [isMax, setIsMax] = useState(false);
  const LOAD = 20;
  const MAXPRODUCTS = 50;

  async function getData(numOfData) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${numOfData}&skip=${count}`
      );
      const result = await response.json();
      setProducts((prev) => [...prev, ...result.products]);
      setLoading(false);
      console.log(result);
    } catch (err) {
      setErr(err.message);
      console.log(err);
    }
  }
  function loadMore() {
    setCount((prev) => prev + LOAD);
    getData(LOAD);

    if (count + LOAD > MAXPRODUCTS) setIsMax(true);
  }
  // useEffect(() => {
  //   getData(LOAD);
  // }, []);
  if (count === 0) loadMore();

  if (loading) return <h1>Loading Data</h1>;
  if (err) return <h1>Error Loading: {err}</h1>;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center ">
        {products.map((product) => {
          return (
            <DataBox
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center flex-col">
        <button
          onClick={loadMore}
          disabled={isMax}
          // style={isMax && { backgroundColor: "#dedede", color: "#a1a095" }}
          className="border border-blue-300"
        >
          Load More Products
        </button>
        {isMax ? <h1>You have reached to 100 Products</h1> : null}
      </div>
    </div>
  );
}
export default LoadMoreData;
