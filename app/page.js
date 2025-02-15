"use client";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MarketOpportunities from "@/components/MarketOpportunities";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ShowcaseEvents from "@/components/ShowcaseEvents";
import Testimonial from "@/components/Testimonial";
import React from "react";

function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <MarketOpportunities />
      <Testimonial />
      <ShowcaseEvents />
      <Footer />
    </div>
  );
}

export default Page;
