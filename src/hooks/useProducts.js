import useProductStore from "../store/productStore";

const useProducts = () => {
  // Solo traemos lo básico del store
  const products = useProductStore((state) => state.products);
  const loading = useProductStore((state) => state.loading);
  const error = useProductStore((state) => state.error);
  const setProducts = useProductStore((state) => state.setProducts);
  const setLoading = useProductStore((state) => state.setLoading);
  const setError = useProductStore((state) => state.setError);

  // Una sola función simple para traer productos
  const loadProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError("Error al cargar productos");
    }

    setLoading(false);
  };

  // Devolvemos solo lo necesario
  return {
    products,
    loading,
    error,
    loadProducts,
  };
};

export default useProducts;
