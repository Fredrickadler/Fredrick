import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

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
      <section id="products" className="max-w-6xl mx-auto px-5 py-10 flex flex-wrap justify-center">
        {products.map((p, idx) => <ProductCard key={idx} {...p} />)}
      </section>
      <Footer />
    </>
  )
}