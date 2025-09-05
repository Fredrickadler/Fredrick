export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Digital Shop. All rights reserved.</p>
        <p>تماس با ما: info@example.com</p>
        <div className="flex space-x-3 mt-3 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">تلگرام</a>
          <a href="#" className="hover:text-primary transition-colors">اینستاگرام</a>
        </div>
      </div>
    </footer>
  )
}