import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className="sm:flex-row mb-10 flex flex-col items-center justify-between hover:text-primary mobile:flex">
      Home Page
    </div>
  );
}
