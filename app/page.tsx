'use client';

import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-24">
        <div className="container mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 drop-shadow-lg"
          >
            Fast Deliveries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl mb-8 font-medium"
          >
            Entregas em até 7 dias úteis • Em toda a Europa
          </motion.p>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
            className="inline-block"
          >
            <a
              href="#produtos"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-2xl transition-all duration-300"
            >
              COMPRAR AGORA
            </a>
          </motion.div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Produtos em Destaque
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Poucos em stock • Envio rápido • Preços imbatíveis
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2025 Fast Deliveries • Entregas em 7 dias • Pagamento seguro</p>
      </footer>
    </div>
  );
}
