import React, { useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import useProductStore from "../../store/productStore";
import { productAPI } from "../../services/api";
import styles from "./Products.module.css";

const Products = () => {
  const { products, loading, error, setProducts, setLoading, setError } =
    useProductStore();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await productAPI.getAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts, setLoading, setError]);

  return (
    <div className={styles.productsPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nuestros Productos</h1>
        <p className={styles.subtitle}>
          Descubre nuestro catálogo completo de productos
        </p>
      </div>

      <ProductList products={products} loading={loading} error={error} />
    </div>
  );
};

export default Products;
