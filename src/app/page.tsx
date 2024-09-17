import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    // this only worked when I added the React fragement ( i.e. <> )
    <>
      <Header />
      <Hero />
    </>
  );
}
