
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Watch",
    description: "Elegant timepiece with a clean, minimalist design and premium materials.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
    category: "Accessories"
  },
  {
    id: 2,
    name: "Premium Headphones",
    description: "Immersive sound experience with noise cancellation and premium build quality.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Ceramic Vase",
    description: "Handcrafted ceramic vase with a modern, sculptural design.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Home"
  },
  {
    id: 4,
    name: "Modern Chair",
    description: "Ergonomic chair with clean lines and premium upholstery.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    category: "Furniture"
  },
  {
    id: 5,
    name: "Smart Speaker",
    description: "Voice-controlled speaker with premium sound quality and smart home integration.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    category: "Electronics"
  },
  {
    id: 6,
    name: "Leather Backpack",
    description: "Premium leather backpack with multiple compartments and durable construction.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1369&q=80",
    category: "Accessories"
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    description: "Premium mechanical keyboard with customizable RGB lighting and durable switches.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    category: "Electronics"
  },
  {
    id: 8,
    name: "Desk Lamp",
    description: "Adjustable desk lamp with minimalist design and energy-efficient LED lighting.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Home"
  }
];

export const categories = [
  "All",
  ...Array.from(new Set(products.map((product) => product.category)))
];
