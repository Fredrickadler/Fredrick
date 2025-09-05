import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const products = [
    { title: "تلگرام پرمیوم", description: "اشتراک رسمی تلگرام پرمیوم", price: "100,000 تومان" },
    { title: "یوتوب پرمیوم", description: "اشتراک یوتوب پرمیوم", price: "120,000 تومان" },
    { title: "Farcaster اکانت",