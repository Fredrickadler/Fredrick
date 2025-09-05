import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-primary">Digital Shop</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#products" className="hover:text-primary transition-colors">محصولات</a>
          <a href="#about" className="hover:text-primary transition-colors">درباره ما</a>
          <a href="#contact" className="hover:text-primary transition-colors">تماس</a>
        </nav>
        <DarkModeToggle />
        <button className="md:hidden p-2 bg-primary text-white rounded-lg">منو</button>
      </div>
    </header>
  )
}