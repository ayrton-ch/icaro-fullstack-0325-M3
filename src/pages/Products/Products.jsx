import React, { useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import useProducts from "../../hooks/useProducts";
import styles from "./Products.module.css";

const Products = () => {
  const { products, loading, error, loadProducts } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

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
