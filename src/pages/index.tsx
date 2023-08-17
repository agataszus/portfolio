import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return <div className="sm:flex-row flex flex-col items-center hover:text-primary mobile:flex">Home Page</div>;
}
