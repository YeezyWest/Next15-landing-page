
import { Footer } from "@/feature/guest/components/footer/footer";
import { Header } from "@/feature/guest/components/header";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
