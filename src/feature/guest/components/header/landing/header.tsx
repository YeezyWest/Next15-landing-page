"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog"; 
import { useState } from "react";
import { Menu } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16">
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#37447E]">
                <Menu className="h-10 w-10" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <DialogTitle className="sr-only">Menu</DialogTitle>{" "}
              {/* Add DialogTitle */}
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#37447E] hover:text-[#111B47] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#37447E] hover:text-[#111B47] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#37447E] hover:text-[#111B47] transition-colors"
                >
                  Contact
                </Link>
                <Button
                  className="bg-[#111B47] hover:bg-[#1A237E]/90 mt-4"
                  size="lg"
                  onClick={() => setIsOpen(false)}
                >
                  Buy Now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1 flex justify-end md:justify-center">
          <Link href="/" className="text-2xl text-[#37447E] font-bold">
            Landing
          </Link>
        </div>

        <div className="hidden md:flex">
          <Button className="bg-[#111B47] hover:bg-[#1A237E]/90 z-50" size="lg">
            Buy Now
          </Button>
        </div>
      </div>
    </header>
  );
}