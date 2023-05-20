import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [relatedProducts, setRealtedProducts] = useState([]);

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRealtedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product details</h1>
          <hr />
          <h6>Name: {product.name}</h6>
          <h6>Category: {product?.category?.name}</h6>
          <h6>Description: {product.description}</h6>
          <h6>
            Price:
            {product?.price.toLocaleString("INR", {
              style: "currency",
              currency: "INR",
            })}
          </h6>
          <h6>Quantity left: {product.quantity}</h6>
          <button className="btn btn-secondary ms-1">ADD TO CART</button>
          {/* <h6>Shipping: {product.shipping}</h6> */}
        </div>
      </div>
      <hr />
      <div className="row container similar-products">
        <h4>Similar products ➡️</h4>

        {relatedProducts.length < 1 && (
          <p className="text-center">No similar products found </p>
        )}
        {/* {JSON.stringify(relatedProducts, null, 4)} */}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("INR", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </h5>
                </div>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More details
                  </button>

                  <button className="btn btn-dark ms-1">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <h1>Deatils</h1>
      {JSON.stringify(product, null, 4)} */}
    </Layout>
  );
};

export default ProductDetails;
