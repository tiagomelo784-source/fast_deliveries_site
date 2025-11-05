'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Adicionado ao carrinho! Total parcial: R$ ${calculateTotal(cart).toFixed(2)}`);
  };

  const calculateTotal = (cart: Product[]) => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
        <p className="text-2xl font-bold text-primary">R$ {product.price.toFixed(2)}</p>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => router.push(`/product/${product.id}`)}
            className="flex-1 bg-secondary text-white py-2 rounded text-sm"
          >
            Ver Detalhes
          </button>
          <button onClick={addToCart} className="flex-1 bg-primary text-white py-2 rounded text-sm">
            Comprar
          </button>
        </div>
      </div>
    </motion.div>
  );
}
