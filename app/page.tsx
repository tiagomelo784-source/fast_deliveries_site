'use client'; // ← ESSENCIAL

import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Fast Deliveries
          </motion.h1>
          <p className="text-xl">Entrega em até 7 dias úteis!</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Mais Vendidos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
