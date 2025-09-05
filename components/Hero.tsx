export default function Hero() {
  return (
    <section className="relative text-center py-24 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      <h1 className="text-5xl font-extrabold mb-4">خدمات دیجیتال و اشتراک پرمیوم</h1>
      <p className="text-xl mb-8">تلگرام، یوتوب، دیسکورد، اسپاتیفای و بازی‌های موبایل با تحویل فوری</p>
      <a href="#products" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg">
        شروع خرید
      </a>
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-20 translate-y-20 animate-pulse"></div>
    </section>
  )
}