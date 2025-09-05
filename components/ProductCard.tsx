import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
}

export default function ProductCard({ title, description, price }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5 m-3 w-64"
    >
      <h3 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
      <p className="font-semibold text-primary mt-4">{price}</p>
      <button className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-indigo-600 transition">
        خرید
      </button>
    </motion.div>
  );
}