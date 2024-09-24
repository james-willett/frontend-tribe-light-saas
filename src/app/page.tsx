import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";

export default function Home() {
  return (
    // this only worked when I added the React fragement ( i.e. <> )
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
    </>
  );
}
