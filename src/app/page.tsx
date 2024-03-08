import Footer from "@/components/footer";
import Images from "@/components/images";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Images />
      <Footer />
    </main>
  );
}
