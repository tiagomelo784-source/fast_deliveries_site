'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  stock: number;
  image: string;
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    const total = cart.reduce((sum: number, item: any) => sum + item.price * (item.quantity || 1), 0);
    alert(`Adicionado! Total: €${total.toFixed(2)}`);
  };

  return (
    <motion.div
      whileHover={{ y: -8, shadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300"
    >
      {/* Imagem com badge */}
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.stock < 5 && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            Só {product.stock} em stock!
          </div>
        )}
        {product.oldPrice > product.price && (
          <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-bold text-xl mb-2 text-gray-800 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        {/* Preços */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-3xl font-bold text-emerald-600">€{product.price.toFixed(2)}</span>
          {product.oldPrice > product.price && (
            <span className="text-lg text-gray-500 line-through">€{product.oldPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Botões */}
        <div className="flex gap-3">
          <button
            onClick={() => router.push(`/product/${product.id}`)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 rounded-xl transition-all"
          >
            Ver Detalhes
          </button>
          <button
            onClick={addToCart}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all shadow-md"
          >
            COMPRAR
          </button>
        </div>
      </div>
    </motion.div>
  );
}
