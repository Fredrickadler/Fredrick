import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    { title: "تلگرام پرمیوم", description: "اشتراک رسمی تلگرام پرمیوم", price: "100,000 تومان" },
    { title: "یوتوب پرمیوم", description: "اشتراک یوتوب پرمیوم", price: "120,000 تومان" },
    { title: "Farcaster اکانت", description: "اکانت Farcaster", price: "150,000 تومان" },
    { title: "Farcaster پرمیوم", description: "اشتراک پرمیوم Farcaster", price: "50 دلار" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center py-10">خرید خدمات دیجیتال</h1>
      <div className="flex flex-wrap justify-center">
        {products.map((p, idx) => (
          <ProductCard key={idx} {...p} />
        ))}
      </div>
    </div>
  );
}