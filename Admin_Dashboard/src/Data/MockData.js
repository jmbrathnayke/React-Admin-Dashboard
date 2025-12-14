// Mock user data
export const users = Array.from({ length: 42 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 3 === 0 ? "Admin" : "User",
  status: index % 2 === 0 ? "Active" : "Inactive",
}));

// Mock product data
export const products = Array.from({ length: 36 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  category: index % 2 === 0 ? "Electronics" : "Accessories",
  price: `$${(Math.random() * 500 + 50).toFixed(2)}`,
  stock: index % 4 === 0 ? "Out of Stock" : "In Stock",
}));
