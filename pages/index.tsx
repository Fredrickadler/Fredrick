import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const products = [
    { title: "تلگرام پرمیوم", description: "اشتراک رسمی تلگرام پرمیوم", price: "100,000 تومان" },
    { title: "یوتوب پرمیوم", description: "اشتراک یوتوب پرمیوم", price: "120,000 تومان" },
    { title: "Farcaster اکانت", description: "اکانت Farcaster", price: "150,000 تومان" },
    { title: "Farcaster پرمیوم", description: "اشتراک Farcaster پرمیوم", price: "50 دلار" },
    { title: "جم UC پابجی", description: "خرید جم بازی PUBG", price: "30,000 تومان" },
    { title: "اشتراک CHAT GPT", description: "اشتراک پرو CHAT GPT", price: "200,000 تومان" }
  ];

  return (
    <>
      <Header />
      <Hero />
      <section id="products" className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ProductCard {...p} />
          </motion.div>
        ))}
      </section>
      <Footer />
    </>
  )
}