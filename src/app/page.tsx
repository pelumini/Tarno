import HomeBanner from "@/components/HomeBanner";
import ProductsList from "@/components/products/ProductsList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <div className="container">
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          <ProductsList />
        </div>
      </div>
    </main>
  );
}
