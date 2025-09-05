import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-primary">Digital Shop</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-primary">خانه</a>
          <a href="#" className="hover:text-primary">محصولات</a>
          <a href="#" className="hover:text-primary">تماس</a>
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  )
}