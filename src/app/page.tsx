"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWrench,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import Header from "@/components/Header";
import ServicesSection from "@/components/Services";
import CreateWebsite from "@/components/Create-your-website";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseUs from "@/components/Why-choose-us";
import Slider from "@/components/Slider";
//import { usePathname } from "next/navigation";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const { bargerMenuToggle } = UseSiteContext();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    bargerMenuToggle(false);
  }, []);

 

  return (
    <div className="w-full mx-auto bg-gray-100 text-gray-900">
      {/* Header */}
   <Header />

   
<Slider />
      {/* Our Services */}
      <ServicesSection />

      <CreateWebsite />
      {/* <FeaturesSection />
      <WhyChooseUs /> */}

      {/* Contact Us */}
      <section id="contact" className="text-slate-700  text-center">
        <div className="bg-[#133C72] py-10 container mx-auto min-h-[300px] text-white">
          <h2 className="text-3xl font-bold ">Contact Us</h2>
          <p className="mt-2">Reliable Roadside Services</p>
          <p className="flex justify-center items-center mt-2">
            <FaMapMarkerAlt className="mr-2" /> 3 Florence Tollgate Pl Unit 6,
            Florence, NJ 08518
          </p>
          <p className="flex justify-center items-center mt-2">
            <FaPhoneAlt className="mr-2" /> 609-456-6373
          </p>
          <p className="flex justify-center items-center mt-2">
            <FaEnvelope className="mr-2" /> reliableroadsideservicesnj@gmail.com
          </p>
        </div>
      </section>

      <section className="" id="about-us">
        <div className="container text-slate-700 mx-auto  bg-amber-300 py-10 px-6  text-center">
          <h2 className="text-3xl font-bold  mb-6">About Us</h2>
          <p className="text-lg  mb-6">
            At <strong>Reliable Roadside Services</strong>, we pride ourselves
            on delivering fast, dependable, and professional roadside assistance
            when you need it most. Whether you're stuck with a flat tire, locked
            out of your car, or in need of a tow — our team is just one call
            away.
          </p>
          <p className="text-lg  mb-6">
            Conveniently located at{" "}
            <strong>3 Florence Tollgate Pl Unit 6, Florence, NJ 08518</strong>,
            we serve Florence and surrounding areas with 24/7 service you can
            count on. With years of experience and a commitment to customer
            satisfaction, we aim to get you back on the road safely and swiftly.
          </p>

          <div className="text-lg space-y-2">
            <div className="flex gap-2 items-center">
              <FaPhoneAlt className="mr-2" /> <strong>Call us anytime:</strong>{" "}
              <a
                href="tel:6094566373"
                className="text-blue-600 hover:underline"
              >
                609-456-6373
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <FaEnvelope className="mr-2" /> <strong>Email:</strong>{" "}
              <a
                href="mailto:reliableroadsideservicesnj@gmail.com"
                className="text-blue-600 hover:underline"
              >
                reliableroadsideservicesnj@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div className="container mx-auto">
        <div className="w-full h-80">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.632637760872!2d-74.80572268464999!3d40.11260797940106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c154f1c88831b7%3A0x18d52456d5bb97b5!2s3%20Florence%20Tollgate%20Pl%20Unit%206%2C%20Florence%2C%20NJ%2008518%2C%20USA!5e0!3m2!1sen!2sus!4v1648703211736!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#133C72] container mx-auto text-white text-center py-4">
        <p>&copy; 2025 Reliable Roadside Services. All Rights Reserved.</p>
        <p className="text-sm">
          Developed by{" "}
          <a href="https://gstadeveloper.com" className="underline">
            Gstadeveloper.com
          </a>
        </p>
      </footer>
    </div>
  );
}
