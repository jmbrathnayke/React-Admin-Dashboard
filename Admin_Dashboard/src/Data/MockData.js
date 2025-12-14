export const users = Array.from({ length: 42 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 3 === 0 ? "Admin" : "User",
  status: index % 2 === 0 ? "Active" : "Inactive",
}));
export const products = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  category: `Category ${((index % 5) + 1)}`,
  price: (Math.random() * 100).toFixed(2),
  stock: Math.floor(Math.random() * 100),
}));