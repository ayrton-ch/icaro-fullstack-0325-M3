const API_BASE_URL = "https://fakestoreapi.com";

export const productAPI = {
  // Obtener todos los productos
  getAllProducts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) throw new Error("Error al cargar productos");
      return await response.json();
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  },

  // Obtener producto por ID
  getProductById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      if (!response.ok) throw new Error("Producto no encontrado");
      return await response.json();
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  },

  // Obtener categorías
  getCategories: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/categories`);
      if (!response.ok) throw new Error("Error al cargar categorías");
      return await response.json();
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  },
};
