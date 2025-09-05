import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
    localStorage.theme = dark ? 'light' : 'dark';
  }

  return (
    <button onClick={toggleDark} className="p-2 bg-primary text-white rounded">
      {dark ? "روشن" : "تاریک"}
    </button>
  )
}