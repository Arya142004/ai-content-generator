import Image from "next/image";
import Link from "next/link";
import { MuseoModerno } from "next/font/google";
import { cn } from "@/lib/utils";

const museo = MuseoModerno({
  weight: "700",
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    
      <div className={cn(museo.className, "font-extrabold  text-2xl flex flex-col items-center")}>
        <Link href="/">
        <span className="text-4xl">N</span>ext
        <span className="text-4xl">T</span>ext
        </Link>
      </div>
    
  );
};
