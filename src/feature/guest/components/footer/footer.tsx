import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#E7ECFF] py-8">
      <div className="container">
        <div className="flex flex-col gap-8">
          {/* Top section with logo and purchase button */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[#939EA4] text-center md:text-left">
              ©2023 Yourcompany
            </div>
            <Link href="/" className="text-2xl font-bold text-[#37447E]">
              Landing
            </Link>
            <Button
              size={"lg"}
              className="bg-[#111B47] text-white hover:bg-[#1A237E]/90"
            >
              Purchase now
            </Button>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#5C6BC0]/20" />

          {/* Bottom section with links and social */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
              <Link
                href="/"
                className="text-sm text-[#929ECC] hover:text-[#1A237E] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-[#929ECC] hover:text-[#1A237E] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-[#929ECC] hover:text-[#1A237E] transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-[#B0B8BC] hover:text-[#1A237E] transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-[#B0B8BC] hover:text-[#1A237E] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-[#B0B8BC] hover:text-[#1A237E] transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-[#B0B8BC] hover:text-[#1A237E] transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="#"
                className="text-[#B0B8BC] hover:text-[#1A237E] transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
