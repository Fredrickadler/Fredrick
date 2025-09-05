import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      setDark(true)
    }
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark')
    setDark(!dark)
    localStorage.theme = dark ? 'light' : 'dark';
  }

  return (
    <>
      <button 
        onClick={toggleDark} 
        className="fixed top-4 right-4 p-2 bg-primary text-white rounded z-50"
      >
        {dark ? "روشن" : "تاریک"}
      </button>
      <Component {...pageProps} />
    </>
  )
}