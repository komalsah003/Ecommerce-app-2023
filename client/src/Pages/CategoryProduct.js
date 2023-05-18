import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  const getProductByCategory = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/:${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProductByCategory();
  }, [params?.slug]);

  return (
    <Layout>
      <div className="container mt-3">
        <h3 className="text-center">Category - {category?.name}</h3>
        <h6 className="text-center">{products?.length} results found</h6>
        <div className="row">
          <div className="col-md-9">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div
                  className="card m-2"
                  //   style={{ width: "18rem" }}
                  key={p._id}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <h6 className="card-number">Rs.{p.price}</h6>
                    <p className="card-text">
                      {p.description.substring(0, 30)}...
                    </p>
                    <button
                      className="btn btn-infos ms-1"
                      onClick={(e) => navigate(`/product/${p.slug}`)}
                    >
                      More details
                    </button>
                    <button className="btn btn-dark ms-1">Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setpage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
