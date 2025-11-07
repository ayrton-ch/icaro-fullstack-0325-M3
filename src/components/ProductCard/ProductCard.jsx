import React from "react";
import useProductStore from "../../store/productStore";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const addToCart = useProductStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>${product.price}</p>

        <button className={styles.addButton} onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
