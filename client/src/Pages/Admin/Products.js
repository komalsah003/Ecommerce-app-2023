import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import "../../styles/AdminProducts.css";
import { AiOutlineReload } from "react-icons/ai";

const Products = () => {
  const [products, setProducts] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const [categories, setCategories] = useState([]);

  // const getAllCategory = async () => {
  //   try {
  //     const { data } = await axios.get("/api/v1/category/get-category");
  //     if (data?.success) {
  //       setCategories(data?.category);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Error while fetching categories");
  //   }
  // };

  // const loadMore = async () => {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
  //     setLoading(false);
  //     setProducts([...products, ...data?.products]);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // const getTotalCount = async () => {
  //   try {
  //     const { data } = await axios.get("/api/v1/product/product-count");
  //     setTotal(data?.total);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getAllCategory();
  //   getTotalCount();
  // }, []);

  // useEffect(() => {
  //   if (page === 1) return;
  //   loadMore();
  // }, [page]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Error while fetching all products");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">
                        {p.name.substring(0, 20)}...
                      </h5>
                      <h5 className="card-title card-price">
                        {p.price.toLocaleString("INR", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </h5>
                    </div>
                    <p className="card-text">
                      {p.description.substring(0, 20)}...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {""}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
