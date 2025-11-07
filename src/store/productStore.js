import { create } from "zustand";

const useProductStore = create((set, get) => ({
  products: [],
  cart: [],
  loading: false,
  error: null,

  // Acciones para productos
  setProducts: (products) => set({ products }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  // Acciones para carrito
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, { ...product, quantity: 1, id: Date.now() }],
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cart: [] }),

  // Obtener total del carrito
  getCartTotal: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));

export default useProductStore;
